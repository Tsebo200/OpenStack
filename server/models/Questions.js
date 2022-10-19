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

// title: {
//     type: String,
//     required: true
// },
// body: {
//     type: String,
//     required: true
// },
// code: {
//     type: String,
//     required: true
// },
// userDetails:{
//     userProfilePicture: String,
//     userName: String,
//     userScore: Number
// },
// questionCreated:{
//     type: Date,
//     default: Date.now
// },
// questionInteraction:{
//     answers: Number,
//     votes: Number,
//     correctAnswer: Number
// },
// image: String,
// tags: String,
//     // $push for pushing tags as obj to array (inside of patch req)
// answers:{
//     type: Array
// }
