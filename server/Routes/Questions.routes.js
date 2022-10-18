const express = require("express")

const questionSchema = require('../models/Questions')
const questionsRouter = express();

questionsRouter.get('/api/all-questions', async (req, res) => {
    const findQuestions = await questionSchema.find();
    res.json(findQuestions)
})


module.exports = questionsRouter;