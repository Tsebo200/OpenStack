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
    answers:{
        type: Array
    },
    user: String,
    views: Number,
    upVotes: Number,
    downVotes: Number,
    reports: Number
});

// {
//     questionTitle: "please Help html error",
//     questionText:
//       "Lorem Ipsum is simply dummy text of the printing QWSOH;qnsawedo;jawldaw;bjd and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     userDetails: {
//       userprofilePicture: userprofilePicture,
//       userName: "Caveman822",
//       userScore: 20009,
//     },
//     questionCreated: "2022-10-11T00:19:38+02:00",
//     questionInteraction: {
//       answers: 3,
//       votes: 2,
//       correctAnswer: true,
//     },
//     questionTags: [
//       { id: 1, title: "CSS" },
//       { id: 2, title: "HTML" },
//     ],
//   },

module.exports = mongoose.model('questions', questionSchema);
