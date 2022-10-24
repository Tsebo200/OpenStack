const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    userDetails:{
        userProfilePicture: String,
        userName: String,
        userScore: Number
    },
    questionCreated:{
        type: Date,
        default: Date.now
    },
    questionInteraction:{
        answers: {type: Number, default: 0},
        votes: {type: Number, default: 0},
        correctAnswer: {type: Number, default: 0}
    },
    image: String,
    tags: Array,
        // $push for pushing tags as obj to array (inside of patch req)
    answersId:{
        type: Array
    }

});

module.exports = mongoose.model('questions', questionSchema);
