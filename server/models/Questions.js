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
    image: String,
    tags: {
        type: Array,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    user: String,
    answers: Number,
    views: Number,
    upVotes: Number,
    downVotes: Number,
    reports: Number

});

module.exports = mongoose.model('questions', questionSchema);
