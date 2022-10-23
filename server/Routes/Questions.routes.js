const express = require("express")

const questionSchema = require('../models/Questions')
const questionsRouter = express();
const multer = require('multer');
const path = require('path');
const tagSchema = require('../models/Tags');

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
        userDetails: {
            userProfilePicture: data.userDetails.userProfilePicture,
            username: data.userDetails.username,
            userScore: data.userDetails.userScore
        },
        image: req.file.filename,
        tags: data.tags
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

questionsRouter.post('/api/add-tag', async (req, res) => {
    let data = req.body.data;

    const newTag = new tagSchema({
        tagName: data.tagName
    })

    const tagDuplicate = await tagSchema.findOne({ tagName: tagName }).exec();
    if(tagDuplicate){
        return res.sendStatus(409);
    }

    try{
        const response = newTag.save()
        console.log(response);
        res.status(201).json({"success": `new tag: ${data.tagName} created!`});
    }

    catch(err){
        res.json(500).json({"msg": err.message});
    }


    // .then(i => {
    //     res.json(i)
    // })
    // .catch(err => {
    //     res.status(400).json({msg: "Tag could not be added!", err});
    // })
})

questionsRouter.get('/api/all-tags', async (req, res) => {
    const findTags = await tagSchema.find();
    res.json(findTags);
});

questionsRouter.patch('/api/delete-tag/', async (req, res) => {
    const tag = await tagSchema.findOne({_id: req.body.id}).exec();
    if(!tag){
        res.status(204).json({"message" : "No Tag Exists!"});
    }
    const response = await tag.updateOne(
        
    );
    
    const tagUpdate = {...tag, tombstone: true}

    res.json(response);
});




module.exports = questionsRouter;