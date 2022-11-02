const mongoose = require('mongoose');

const reportsSchema = mongoose.Schema({

    reportBody: {
        type: String,
        required: true
    },
    questionId: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('reports', reportsSchema);
