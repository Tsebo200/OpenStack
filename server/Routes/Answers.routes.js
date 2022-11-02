const express = require("express");
const answersSchema = require("../models/Answers");
const userSchema = require("../models/Users");
const questionSchema = require("../models/Questions");

const answersRouter = express();

answersRouter.post("/answer-post", async (req, res) => {
  const { AnswerValues, user, questionId } = req.body;
  const newAnswer = new answersSchema({
    body: AnswerValues.answerBody,
    code: AnswerValues.answerCodeBody,
    user: user,
  });

  try {
    // save answer
    const response = await newAnswer.save();
    response.questionId.push(questionId);
    response.save();

    // save question
    const question = await questionSchema.findById(questionId);
    question.questionInteraction.answers =
      question.questionInteraction.answers + 1;
    question.save();
    res.status(201).json({ success: `new Answer: created!` });
  } catch (err) {
    res.json(500).json({ msg: err.message });
  }
});

// const update = await questionSchema
//   .findByIdAndUpdate(questionId, { tombstone: true })
//   .exec();
// res.json("tag has been removed");

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

  const userData = await userSchema.find({ _id: { $in: userIds } });

  const userDataCompressed = userData.map((user) => {
    const { userScore, username, _id } = user;
    return {
      userScore: userScore,
      username: username,
      id: _id,
    };
  });

  res.json({
    findAnswers: findAnswers,
    userDataCompressed: userDataCompressed,
  });
});

answersRouter.delete("/answer", async (req, res) => {
  const { answerId, questionId } = req.query;

  try {
    const response = await answersSchema.deleteOne({ _id: answerId });
    const question = await questionSchema.findById(questionId);
    question.questionInteraction.answers =
      question.questionInteraction.answers - 1;
    question.save();
    res.status(200).json("answer " + answerId + " was deleted");
  } catch (error) {
    res.json("error there was an error");
  }
});

answersRouter.patch("/answer-vote", async (req, res) => {
  const { userId, action, answerId } = req.body;

  // find if user id and user exists
  const userFound = await userSchema.findOne({ _id: userId }).exec();
  const update = await answersSchema.findById(answerId).exec();
  const voteDuplicate = update.votes.filter((vote) => {
    return vote.userId === userId;
  });
  if (!userFound) {
    res.status(209).json("You need to be logged in to vote on a answer");
    return;
  }
  if (voteDuplicate.length > 0) {
    if (voteDuplicate[0].action === action) {
      console.log("remove vote");
      const index = update.votes.findIndex((vote) => {
        return vote === voteDuplicate[0];
      });
      update.votes.splice(index, 1);
      update.save();
      res.status(200).json("vote removed");
    } else {
      const index = update.votes.findIndex((vote) => {
        return vote === voteDuplicate[0];
      });
      update.votes.splice(index, 1);
      update.votes.push({
        userId: userId,
        action: action,
      });
      update.save();
      res.status(200).json("Vote updated");
    }
    return;
  } else {
    update.votes.push({
      userId: userId,
      action: action,
    });
    update.save();
  }

  res.json("vote complete");
  return;
});

answersRouter.patch("/answer-set-correct", async (req, res) => {
  const { answerId, questionId } = req.body;

  const question = await questionSchema.findById(questionId);

  if (question.questionInteraction.correctAnswer === answerId) {
    question.questionInteraction.correctAnswer = null;
    question.save();
    res.status(200).json("Answer has been removed");
    return;
  }
  question.questionInteraction.correctAnswer = answerId;
  question.save();
  res.status(200).json("Answer has been set");
});

module.exports = answersRouter;
