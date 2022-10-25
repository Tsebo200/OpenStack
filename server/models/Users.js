const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
    roles: {
        type: Array,
        required: true,
        default: [2001]
    },
    date:{
        type: Date,
        default: Date.now
    },
    accountStatus: {
        type: Boolean,
        default: false
    },
    // achievements: {
    //     type: Array
    //     //get id and push to arr
    // },
    achievement1: {
        type: Boolean,
        required: true,
        default: false
    },
    achievement2: {
        type: Boolean,
        required: true,
        default: false
    },
    achievement3: {
        type: Boolean,
        required: true,
        default: false
    },
    userScore: {
        type: Number,
        default: 0
    },
    refreshToken: String

});

// userSchema.pre('save', async function(next){
//     try{
//         let tokenPayload = {username: this.username, email: this.email}
//         const token = await jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET);
//         this.token = token;
//         next();
//     } catch (err) {
//         next(err);
//     }
// });



module.exports = mongoose.model('users', userSchema);
