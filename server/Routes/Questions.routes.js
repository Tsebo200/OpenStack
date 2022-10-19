const express = require("express")

const questionSchema = require('../models/Questions')
const questionsRouter = express();
const multer = require('multer');
const path = require('path');

// Multer Middleware

const questionImageStore = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, './questionImages');
    },

    filename: (req, file, callback) => {
        console.log(file);
        callback(null, Date.now() + path.extname(file.originalname));
    }
});

const uploadQuestionImage = multer({storage: questionImageStore});

questionsRouter.post('/api/add-question', uploadQuestionImage.single('image') ,(req, res) => {

    let data = JSON.parse(req.body.information);

    console.log(req.file.filename);

    const newQuestion = new questionSchema({
        title: data.title,
        body: data.body,
        code: data.code,
        tags: data.tags,
        image: req.file.filename,
        user: req.body.user,
        answers: +data.answers,
        views: +data.views,
        upVotes: +data.upVotes,
        downVotes: +data.downVotes,
        reports: +data.reports
    });

    newQuestion.save()
    .then(i => {
        res.json(i)
    })
    .catch(err => {
        res.status(400).json({msg: "Question could not be added!", err});
    });

})

questionsRouter.get('/api/all-questions', async (req, res) => {
    const findQuestions = await questionSchema.find();
    res.json(findQuestions)
})


module.exports = questionsRouter;