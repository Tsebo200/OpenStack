const express = require("express");
const router = express.Router();

const userSchema = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRouter = express();

authRouter.post("/auth", async (req, res) => {
  // res.json("hello")
  const { email, pwd } = req.body;
  if (!email || !pwd)
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  const foundUser = await userSchema.findOne({ email: email }).exec();
  if (!foundUser) return res.sendStatus(401); //Unauthorized
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const roles = foundUser.roles;
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          userId: foundUser._id,
          username: foundUser.username,
          email: foundUser.email,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // Saving refreshToken with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);
    // console.log(roles);
    console.log(refreshToken);

    // Creates Secure Cookie with refresh token
    // res.json("save cookie");
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      // secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Send authorization roles and access token to user
    // console.log(accessToken);
    res.json({ roles, accessToken, refreshToken });
  } else {
    res.sendStatus(401);
  }
});

module.exports = authRouter;
