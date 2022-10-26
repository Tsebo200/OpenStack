const express = require("express");

const questionSchema = require("../models/Questions");
const userSchema = require("../models/Users");
const questionsRouter = express();
const multer = require("multer");
const path = require("path");
const tagSchema = require("../models/Tags");

// Multer Middleware

const questionImageStore = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "./questionImages");
  },

  filename: (req, file, callback) => {
    console.log(file);
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadQuestionImage = multer({ storage: questionImageStore });

questionsRouter.post(
  "/api/add-question",
  // uploadQuestionImage.single("image"),
  async (req, res) => {
    // let data = JSON.parse(req.body.information);

    // console.log(req.file.filename);
    const { title, body, codeBody, codeLanguage, user_id, tags } = req.body;
    const newQuestion = new questionSchema({
      title: title,
      body: body,
      code: {
        codeBody: codeBody,
        codeLanguage: codeLanguage,
      },
      // image: req.file.filename,
      tags: tags,
      userId: user_id,
    });

    try {
      const response = await newQuestion.save();
      res.status(201).json({ success: `new question: ${title} created!` });
      // res.json(newQuestion);
    } catch (err) {
      console.log(err);
    }

    // const userDetails = {
    //   // userProfilePicture: String,
    //     userName: String,
    //     userScore: Number
    // }

    // const tagList = await tags.map(async (tag_id) => {
    //   console.log(tag_id);
    //   const tag = await tagSchema.findById(tag_id).exec();
    //   console.log(tag);
    //   // return tag;
    // });
    // try {
    //   console.log(tagList);
    //   res.json(tagList);
    // } catch (err) {
    //   res.json(err);
    // }
    // const findTags = await tagSchema.find();

    // return tagName

    // newQuestion
    //   .save()
    //   .then((i) => {
    //     res.json(i);
    //   })
    //   .catch((err) => {
    //     res.status(400).json({ msg: "Question could not be added!", err });
    //   });
  }
);

questionsRouter.get("/api/all-questions", async (req, res) => {
  const findQuestions = await questionSchema.find();
  res.json(findQuestions);
});

questionsRouter.get("/question", async (req, res) => {
  const { questionId } = req.query;

  const findQuestion = await questionSchema.findOne({ _id: questionId });
  const userData = await userSchema.findOne({ _id: findQuestion.userId });
  const { userScore, username } = userData;

  res.json({
    findQuestion: findQuestion,
    userData: {
      userScore: userScore,
      username: username,
    },
  });
});

questionsRouter.get("/api/all-tags", async (req, res) => {
  try {
    const findTags = await tagSchema.find();
    const availableTags = findTags.filter((tag) => {
      return tag.tombstone === false;
    });
    res.json(availableTags);
  } catch (err) {
    res.json(500).json({ msg: err.message });
  }
});

questionsRouter.post("/unique-tags", async (req, res) => {
  const { UniqueTagsList } = req.body;
  try {
    const findTags = await tagSchema.find({ _id: UniqueTagsList });
    res.json(findTags);
  } catch (err) {
    res.json(500).json({ msg: err.message });
  }
});

questionsRouter.post("/api/add-tag", async (req, res) => {
  const { tagName } = req.body;

  const tagDuplicate = await tagSchema.findOne({ tagName: tagName }).exec();

  if (tagDuplicate) {
    console.log("dup detacted");
    return res.sendStatus(409);
  }
  const newTag = new tagSchema({
    tagName: tagName,
  });
  try {
    const response = await newTag.save();
    res.status(201).json({ success: `new tag: ${tagName} created!` });
  } catch (err) {
    res.json(500).json({ msg: err.message });
  }
});

questionsRouter.patch("/delete-tag", async (req, res) => {
  const { tagId } = req.body;

  //   const tag = await tagSchema.findOne({ _id: req.body.id }).exec();
  //   if (!tag) {
  //     res.status(204).json({ message: "No Tag Exists!" });
  //   }
  //   res.json(tagId);
  const update = await tagSchema
    .findByIdAndUpdate(tagId, { tombstone: true })
    .exec();
  res.json("tag has been removed");
});

module.exports = questionsRouter;
