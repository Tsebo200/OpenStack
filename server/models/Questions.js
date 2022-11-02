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
        type: Object,
        required: true,
        codeBody:{type: String},
        codeLanguage:{type: String}
        
    },
    userId:{
        type: String,
        required: true
    },
    questionCreated:{
        type: Date,
        default: Date.now
    },
    questionInteraction:{
        answers: {type: Number, default: 0},
        votes: {type: Array},
        correctAnswer: {type: String, default: null}
    },
    image: String,
    tags: Array,
    private: {
        type: Boolean,
        default: false
    }
    // $push for pushing tags as obj to array (inside of patch req)

});

module.exports = mongoose.model('questions', questionSchema);
