const express = require("express");

const userSchema = require("../../models/Users");
const userRouter = express();
var bcrypt = require("bcrypt");
const emailService = require("./userAuthenticationEmail.service");

// userRouter.use(emailService);

userRouter.get("/api/all-users", async (req, res) => {
  const findUsers = await userSchema.find();
  res.json(findUsers);
});

userRouter.post("/api/create-user", async (req, res) => {
  console.log(req.body);
  res.json({
    message: "user added",
    data: 1,
  });

  let emailData = {
    username: req.body.username,
    email: req.body.email
  }
  
  emailService(emailData);
})
module.exports = userRouter;
