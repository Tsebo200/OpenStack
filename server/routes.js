const express = require('express');;
const questionSchema = require('./models/Questions');
const router = express();

router.post('/api/addQuestion', (req, res) => {
    const newQuestion = new questionSchema({
        title: req.body.title,
        body: req.body.body,
        code: req.body.code,
        screenshot: String,
        tags: req.body.tags,
        date: Date.now,
        user: req.body.user,
        answers: +req.body.answers,
        views: +req.body.views,
        upVotes: +req.body.upVotes,
        downVotes: +req.body.downVotes,
        reports: +req.body.reports
    });

    newUser.save()
    .then(i => {
        res.json(i)
    })
    .catch(err => {
        res.status(400).json({msg: "User could not be added!", err});
    });

});

module.exports = router;