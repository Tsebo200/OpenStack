const express = require("express");

const nodemailer = require("nodemailer");

const userSchema = require("../../models/Users");
const questionSchema = require("../../models/Questions");
const answerSchema = require("../../models/Answers");
const userRouter = express();
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  const { user, pwd, Email, SelectedImg } = req.body;

  // console.log(!user || !pwd || !Email);

  if (!user || !pwd || !Email) {
    return res
      .status(400)
      .json({ message: "Username, Email and password are required." });
  }

  const usernameDuplicate = await userSchema.findOne({ username: user }).exec();
  const emailDuplicate = await userSchema.findOne({ email: Email }).exec();
  if (usernameDuplicate) {
    return res.sendStatus(409); //Conflict
  }
  if (emailDuplicate) {
    return res.sendStatus(410); //Conflict
  }

  const allowedImages = [
    "1QG1T8m5Dt57tVZ9eC7SBl7Ns9QlVuHjB",
    "1HtSZf8L9cMPimRpG1sMC4_DH6jfznKjy",
    "1fOdYMdeuh06uAheguTQOQGbkeqI7Lsmx",
    "1j16LY_lPXKY8yc4ULBPc6WXh3Z2864YE",
    "1dAQAD9DZijEiPfivZSDnoC-_C8Jn5iUg",
    "1LSeKoGFWmQt5XdlDGOQ-ZAQbeyMnP89q",
    "1-qWSvzB6nO8-OfAwVzbT2IbqhT0XV-HM",
    "1fkkLUoHgGA0mUvys2GDGDRqlkl5ywZRf",
    "1YtvDVIoebi5ijBeMR_BrXoU2asJIFWN2",
  ];

  if (
    !(
      allowedImages.filter((img) => {
        return img === SelectedImg;
      }).length > 0
    )
  ) {
    return res.sendStatus(411); //Conflict
  }
  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    //create and store the new user
    const result = await userSchema.create({
      username: user,
      password: hashedPwd,
      email: Email,
      profilePictureLink: SelectedImg,
    });

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

  const user = await userSchema.findOne({ email: Email }).exec();
  if (user) {
    const refreshToken = jwt.sign(
      { username: user.username, passwordReset: true },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // Saving refreshToken
    user.refreshToken = refreshToken;
    await user.save();
    resetLink =
      "http://localhost:3000/reset-response/" + user._id + "/" + refreshToken;
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
        <p style="margin: 0; font-size: 18px">Let's reset your password so you can get back to answering and asking questions.</p>
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
        <br/>
        <p style="margin: 0; font-size: 16px">If you did not ask to reset your password please ignore this email.</p>
        <br/>
        <p style="margin: 0; font-size: 16px">
          Have any questions need help please email us at support@open-stack.co.za
        </p>
        <br/>
        <p style="margin: 0; font-size: 16px">Happy coding Openstack</p>
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
      from: '"Open Stack Team <noreply@open-stack.co.za>"',
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

userRouter.post("/reset-password", async (req, res) => {
  const { userId, token, pwd } = req.body;
  const user = await userSchema.findOne({ _id: userId }).exec();

  if (user) {
    var tokenValid = false;
    var clientIdValid = token === user.refreshToken;

    const jwtDecode = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    console.log(jwtDecode.passwordReset);
    if (!jwtDecode.passwordReset) {
      res.sendStatus(410);
      return;
    }

    var currentTimestamp = new Date().getTime() / 1000;
    var jwtDate = new Date(jwtDecode.exp * 1000);
    var tokenIsNotExpired = jwtDate > currentTimestamp;
    console.log(tokenIsNotExpired);

    tokenValid = clientIdValid && tokenIsNotExpired;
    if (!tokenValid) {
      res.sendStatus(409);
      return;
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(pwd, salt, function (err, hash) {
        user.password = hash;
        user.save();
      });
    });
    res.status(200).json("password reset");
    return;
  }
  res.sendStatus(409);
  return;
});

userRouter.patch("/user-username", async (req, res) => {
  const { userId, newUsername } = req.body;
  const usernameDuplicate = await userSchema
    .findOne({ username: newUsername })
    .exec();
  if (usernameDuplicate) {
    res.status(409).json("username is taken");
    return;
  }
  const user = await userSchema.findOne({ _id: userId }).exec();
  user.username = newUsername;
  user.save();
  res.status(200).json("user name updated");
});

userRouter.get("/user", async (req, res) => {
  const { userId } = req.query;

  const user = await userSchema.findOne({ _id: userId }).exec();

  const userQuestions = (await questionSchema.find({ userId: userId })).filter(
    (question) => {
      return !question.private;
    }
  );
  const userAnswers = await answerSchema.find({ user: userId }).exec();

  // questionTitle

  const userAnswersRefined = await Promise.all(
    userAnswers.map(async (answer) => {
      const question = (
        await questionSchema.find({
          _id: answer.questionId[0],
        })
      ).filter((question) => {
        return !question.private;
      });
      if (question[0]?.title) {
        return {
          ...answer._doc,
          questionTitle: question[0]?.title,
          correctAnswer: question[0]?.questionInteraction.correctAnswer,
        };
      }
      return;
    })
  );

  let xxx = userAnswersRefined.filter((i) => {
    return i != null;
  });

  try {
    res.status(200).json({ user, userQuestions, userAnswers: xxx });
    return;
  } catch (error) {
    res.status(404).json(error);
    return;
  }
});

userRouter.get("/get-images", async (req, res) => {
  res
    .status(200)
    .json([
      "1QG1T8m5Dt57tVZ9eC7SBl7Ns9QlVuHjB",
      "1HtSZf8L9cMPimRpG1sMC4_DH6jfznKjy",
      "1fOdYMdeuh06uAheguTQOQGbkeqI7Lsmx",
      "1j16LY_lPXKY8yc4ULBPc6WXh3Z2864YE",
      "1dAQAD9DZijEiPfivZSDnoC-_C8Jn5iUg",
      "1LSeKoGFWmQt5XdlDGOQ-ZAQbeyMnP89q",
      "1-qWSvzB6nO8-OfAwVzbT2IbqhT0XV-HM",
      "1fkkLUoHgGA0mUvys2GDGDRqlkl5ywZRf",
      "1YtvDVIoebi5ijBeMR_BrXoU2asJIFWN2",
    ]);
});

module.exports = userRouter;
