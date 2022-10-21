const express = require("express");

const userSchema = require("../../models/Users");
const userRouter = express();
var bcrypt = require("bcrypt");
const emailService = require("./userAuthenticationEmail.service");

userRouter.get("/api/all-users", async (req, res) => {
  const findUsers = await userSchema.find();
  res.json(findUsers);
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
      email: Email
    });

    console.log(result);

    res.status(201).json({ 'success': `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ 'message': err.message });
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
module.exports = userRouter;
