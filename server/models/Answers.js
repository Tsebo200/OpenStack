const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({

    body: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    user: String,
    upVotes: Number,
    downVotes: Number,
    reports: Number

});

module.exports = mongoose.model('answers', answerSchema);
