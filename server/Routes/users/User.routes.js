const express = require("express");

const nodemailer = require("nodemailer");

const userSchema = require("../../models/Users");
const userRouter = express();
var bcrypt = require("bcrypt");
const emailService = require("./userAuthenticationEmail.service");

userRouter.get("/all-users", async (req, res) => {
  const findUsers = await userSchema.find();
  res.json(findUsers);
});

userRouter.patch("/update-user-roles", async (req, res) => {
  // res.json("update")

  const { UserRoles, userId } = req.body;
  // console.log(req);
  const update = await userSchema
    .findByIdAndUpdate(userId, { roles: UserRoles })
    .exec();
  res.json("roles have been update");
});

userRouter.post("/api/register", async (req, res) => {
  const { user, pwd, Email } = req.body;
  console.log(user);

  console.log(!user || !pwd || !Email);

  if (!user || !pwd || !Email) {
    return res
      .status(400)
      .json({ message: "Username, Email and password are required." });
  }

  const usernameDuplicate = await userSchema.findOne({ username: user }).exec();
  console.log(usernameDuplicate);
  const emailDuplicate = await userSchema.findOne({ email: Email }).exec();
  if (usernameDuplicate) {
    return res.sendStatus(409); //Conflict
  }
  if (emailDuplicate) {
    return res.sendStatus(410); //Conflict
  }
  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    //create and store the new user
    const result = await userSchema.create({
      username: user,
      password: hashedPwd,
      email: Email,
    });

    console.log(result);

    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  // emailService({
  //   username: req.body.username,
  //   email: req.body.email,
  // });
  // res.json("awdawawd");
  // bcrypt.genSalt(10, function (err, salt) {
  //   bcrypt.hash(req.body.password, salt, function (err, hash) {
  //     const newUser = new userSchema({
  //       username: req.body.username,
  //       email: req.body.email,
  //       password: hash,
  //     });

  //     newUser
  //       .save()
  //       .then((item) => {
  //         res.json(item);
  //         // emailService({
  //         //   username: req.body.username,
  //         //   email: req.body.email,
  //         // });
  //       })
  //       .catch((err) => {
  //         // res.status((400).json({ msg: "there was an error", err: err }));
  //         res.json(err)
  //         console.log(err);
  //       });
  //   });
  // });
});

// dont use ever
// userRouter.post("/api/del-all-users", async (req, res) => {
//   const findUsers = await userSchema.find().remove();
//   res.json("all users are gone!");
// });

userRouter.post("/api/create-user", async (req, res) => {
  // emailService({
  //   username: req.body.username,
  //   email: req.body.email,
  // });
  // res.json("awdawawd");
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      const newUser = new userSchema({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });

      newUser
        .save()
        .then((item) => {
          res.json(item);
          // emailService({
          //   username: req.body.username,
          //   email: req.body.email,
          // });
        })
        .catch((err) => {
          // res.status((400).json({ msg: "there was an error", err: err }));
          res.json(err);
          console.log(err);
        });
    });
  });
});

userRouter.post("/unique-users", async (req, res) => {
  const { UniqueUsersList } = req.body;

  try {
    const findUsers = await userSchema.find({ _id: UniqueUsersList }).exec();
    const response = findUsers.map((user) => {
      return {
        userId: user._id,
        username: user.username,
        userScore: user.userScore,
      };
    });
    res.json(response);
  } catch (err) {
    res.json(500).json({ msg: err.message });
  }
});

userRouter.get("/reset-password", async (req, res) => {
  const { Email } = req.query;
  console.log(Email);
  resetLink= "/reset-response/:id/:token"
  const user = await userSchema.findOne({ email: Email }).exec();
  console.log(user);
  if (user) {
   
    
    const mailerOutput = `
    <html>
      <body style="width: calc(100% - 200px); padding: 100px; margin: 0">
        <img
          style="text-align: center; margin: 0"
          src="https://drive.google.com/uc?id=1ZV1qtT5fJiYlqZEWCk2DL7nlCoqpY4KW"
          width="200px"
          height="auto"
          alt="Hello"
        />
        <h1 style="font-weight: 300">Hello ${user.username}</h1>
        <h2 style="font-weight: 300">
          Reset Your Password
        </h2>
        <p style="margin: 0; font-size: 22px">Let's reset your password so you can get back to answering and asking questions.</p>
        <br/>
        <br/>
        <a href=${resetLink}
          style="
            padding: 10px;
            background-color: #fca62b;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024,
              0 1px 5px #0000001f;
            color: white;
            font-size: 18px;
            text-decoration: none;
          "
          >Change my password</a
        >
        <br />
        <br />
        <p>If you did not ask to reset your password please ignore this email.</p>
    
    
        <p style="margin: 0; font-size: 18px">
          Have any questions need help please email us at support@open-stack.co.za
        </p>
        <br/>
        <p style="margin: 0; font-size: 18px">Happy coding Openstack</p>
      </body>
    </html>
  `;

    const transporter = nodemailer.createTransport({
      host: "luther.aserv.co.za",
      port: 465,
      secure: true,
      auth: {
        user: "noreply@open-stack.co.za",
        pass: "eUmmR3cnk3kNe32",
      },
    });

    const mailOptions = {
      from: '"Website Mailer Client <noreply@open-stack.co.za>"',
      to: Email,
      subject: "Password Reset",
      html: mailerOutput,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return console.log(err);

      console.log("Message Sent:", info.messageId);
    });
    res.status(200).json("email sent to " + Email);
    return;
  }
  return res.sendStatus(409);
});

module.exports = userRouter;
