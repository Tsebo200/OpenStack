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
    userLevel: String,
    admin: {
        type: Boolean,
        required: true,
        default: false
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
    }

});



module.exports = mongoose.model('users', userSchema);
