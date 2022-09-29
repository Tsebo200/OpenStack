const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userLevel:{
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    key: {
        type: Boolean,
        default: false
    },
    achievements: {
        type: Array
        //get id and push to arr
    },
    userScore: {
        type: Number
    },
    profileImg: String 

});



module.exports = mongoose.model('users', userSchema);
