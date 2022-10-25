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
        votes: {type: Number, default: 0},
        correctAnswer: {type: String, default: null}
    },
    image: String,
    tags: Array,
        // $push for pushing tags as obj to array (inside of patch req)
    answersId:{
        type: Array
    }

});

// {
    //     _id: "20323123",
    //     questionTitle: "please Hawdawdawdawdawdaml error",
    //     questionText:
    //       "Lorem Ipsum is simply dummy text of the printing QWSOH;qnsawedo;jawldaw;bjd and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //     userDetails: {
    //       userprofilePicture: userprofilePicture,
    //       userName: "coovman",
    //       userScore: 43,
    //     },
    //     questionCreated: "2022-10-11T00:19:38+02:00",
    //     questionInteraction: {
    //       answers: 3,
    //       votes: 2,
    //       correctAnswer: false,
    //     },
    //     questionTags: [
    //       { id: 1, title: "CSS" },
    //       { id: 2, title: "HTML" },
    //     ],
    //   },

module.exports = mongoose.model('questions', questionSchema);
