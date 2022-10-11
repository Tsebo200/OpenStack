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
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    date:{
        type: Date,
        default: Date.now
    },
    accountStatus: {
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
    token: String

});

userSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(12);
        const hashPass = await bcrypt.hash(this.password, salt);
        this.password = hashPass;

        let tokenPayload = {username: this.username, email: this.email}

        const token = await jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET);
        this.token = token;

        next();
    } catch (err) {
        next(err);
    }
});



module.exports = mongoose.model('users', userSchema);
