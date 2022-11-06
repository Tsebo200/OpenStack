const express = require("express");
const answersSchema = require("../models/Answers");
const userSchema = require("../models/Users");
const questionSchema = require("../models/Questions");

const answersRouter = express();

const scoreService = require("./score.service");

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

    // give score to person who is answering
    const userToBeScored = await userSchema.findById(user);
    userToBeScored.userScore = userToBeScored.userScore + 1;
    userToBeScored.save();

    res.status(201).json({ success: `new Answer: created!` });
    return;
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
    // remove score and answers votes
    const answer = await answersSchema.findById(answerId);
    console.log(answer);
    let score = -1;
    answer.votes.forEach((vote) => (!vote.action ? score++ : score--));

    console.log(score);

    const userToBeScored = await userSchema.findById(answer.user);
    console.log(userToBeScored);
    userToBeScored.userScore = userToBeScored.userScore + score;
    console.log(userToBeScored);
    userToBeScored.save();

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

  const ownerOfAnswer = await userSchema.findById(update.user).exec();

  const voteDuplicate = update.votes.filter((vote) => {
    return vote.userId === userId;
  });
  if (!userFound) {
    res.status(209).json("You need to be logged in to vote on a answer");
    return;
  }
  // there is a vote duplicate
  if (voteDuplicate.length > 0) {
    // if action "vote" is same as stored vote remove vote
    if (voteDuplicate[0].action === action) {
      console.log("remove Vote");
      // remove vote
      // owner of answer is voting
      if (ownerOfAnswer._id.toString() === userFound._id.toString()) {
        // owner up voted + 2 now must be -2
        if (action) {
          userFound.userScore = userFound.userScore - 2;
        }
      } else {
        // user and owner are not the same
        // user gets a -1
        userFound.userScore = userFound.userScore - 1;
        // owner on a upvote "true" get + 1
        if (action === true) {
          ownerOfAnswer.userScore = ownerOfAnswer.userScore - 1;
        }
        // owner on a down vote "false" get - 1
        if (action === false) {
          ownerOfAnswer.userScore = ownerOfAnswer.userScore + 1;
        }
      }
      console.log("saving");
      await ownerOfAnswer.save();
      await userFound.save();
      console.log("saved");
      console.log(update);
      const index = update.votes.findIndex((vote) => {
        return vote === voteDuplicate[0];
      });
      update.votes.splice(index, 1);
      console.log(update);
      update.save();
      res.status(200).json("vote removed");
      return;
    } else {
      // vote must change
      if (ownerOfAnswer._id.toString() === userFound._id.toString()) {
        // owner changed vote
        if (action) {
          userFound.userScore = userFound.userScore + 2;
        } else {
          userFound.userScore = userFound.userScore - 2;
        }
        await userFound.save();
      } else {
        // user and owner are not the same
        // user wont change as user has still voted!
        // owner on a upvote "true" get + 1
        if (action === true) {
          ownerOfAnswer.userScore = ownerOfAnswer.userScore - 1;
        }
        // owner on a down vote "false" get - 1
        if (action === false) {
          ownerOfAnswer.userScore = ownerOfAnswer.userScore + 1;
        }
      }
      const index = update.votes.findIndex((vote) => {
        return vote === voteDuplicate[0];
      });
      update.votes.splice(index, 1);
      update.votes.push({
        userId: userId,
        action: action,
      });
      await update.save();
    }
  } else {
    // new vote

    // owner of answer is up voting answer
    if (ownerOfAnswer._id.toString() === userFound._id.toString()) {
      if (action) {
        userFound.userScore = userFound.userScore + 2;
      }
      // owner of answer is down voting answer causes a +1 -1 = 0
    } else {
      // user gets a +1
      userFound.userScore = userFound.userScore + 1;

      // owner on a upvote "true" get + 1
      if (action === true) {
        ownerOfAnswer.userScore = ownerOfAnswer.userScore + 1;
      }
      // owner on a down vote "false" get - 1
      if (action === false) {
        ownerOfAnswer.userScore = ownerOfAnswer.userScore - 1;
      }
    }
    await ownerOfAnswer.save();
    await userFound.save();
    // user and owner are not the same

    // save vote
    update.votes.push({
      userId: userId,
      action: action,
    });
    await update.save();
  }
  res.json("vote complete");
  return;
});

answersRouter.patch("/answer-set-correct", async (req, res) => {
  const { answerId, questionId } = req.body;

  const question = await questionSchema.findById(questionId);
  // correct answer gets + 5
  const answer = await answersSchema.findById(answerId);
  const ownerOfAnswer = await userSchema.findById(answer.user);

  if (question.questionInteraction.correctAnswer === answerId) {
    // answer is removed
    ownerOfAnswer.userScore = ownerOfAnswer.userScore - 5;
    await ownerOfAnswer.save();
    question.questionInteraction.correctAnswer = null;
    question.save();
    res.status(200).json("Answer has been removed");
    return;
  }
  // answer set as correct
  ownerOfAnswer.userScore = ownerOfAnswer.userScore + 5;
  await ownerOfAnswer.save();
  question.questionInteraction.correctAnswer = answerId;
  question.save();
  res.status(200).json("Answer has been set");
});

module.exports = answersRouter;
