const express = require("express");

const userSchema = require("../../models/Users");
const userRouter = express();
var bcrypt = require("bcrypt");
const emailService = require("./userAuthenticationEmail.service");

userRouter.get("/api/all-users", async (req, res) => {
  const findUsers = await userSchema.find();
  res.json(findUsers);
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
          emailService({
            username: req.body.username,
            email: req.body.email,
          });
        })
        .catch((err) => {
          // res.status((400).json({ msg: "there was an error", err: err }));
          res.json(err)
          console.log(err);
        });
    });
  });
});
module.exports = userRouter;
