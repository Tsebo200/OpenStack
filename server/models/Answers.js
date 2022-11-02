const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: String,
  votes: { type: Array},
  reports: Number,
  questionId: {
    type: Array,
  },
});

module.exports = mongoose.model("answers", answerSchema);
