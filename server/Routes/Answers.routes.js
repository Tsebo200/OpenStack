const express = require("express");
const answersSchema = require("../models/Answers");
const userSchema = require("../models/Users");

const answersRouter = express();

answersRouter.post("/answer-post", async (req, res) => {
  const { AnswerValues, user, questionId } = req.body;
  const newAnswer = new answersSchema({
    body: AnswerValues.answerBody,
    code: AnswerValues.answerCodeBody,
    user: user,
  });
  try {
    const response = await newAnswer.save();
    response.questionId.push(questionId);
    response.save();
    res.status(201).json({ success: `new Answer: created!` });
  } catch (err) {
    res.json(500).json({ msg: err.message });
  }
});
answersRouter.get("/get-answers", async (req, res) => {
  const { questionId } = req.query;
  const findAnswers = await answersSchema.find({ questionId: questionId });
  // const userData = await userSchema.findOne({ _id: findAnswers.user });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const userIds = findAnswers
    .map((answer) => {
      return answer.user;
    })
    .filter(onlyUnique);

  const userData = await userSchema.find({ '_id': { $in: userIds } });

  const userDataCompressed = userData.map(user => {
    const { userScore, username, _id } = user;
    return {
      userScore: userScore,
      username: username,
      id: _id
    }
  })

  res.json({
    findAnswers: findAnswers,
    userDataCompressed: userDataCompressed,
  });
});

module.exports = answersRouter;
