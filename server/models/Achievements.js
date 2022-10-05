const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    level:{
        //level of achievement (common, epic, legendary)
        type: String,
        required: true
    },
    //how many people have obtained this
    totalObtained:Number


});

module.exports = mongoose.model('achievements', achievementSchema);
