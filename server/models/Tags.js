const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({

    tagName: {
        type: String,
        required: true
    },
    tombstone: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('tags', tagSchema);
