const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({

    tagName: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('tags', questionSchema);
