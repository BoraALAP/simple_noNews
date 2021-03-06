const mongoose = require("mongoose");

const LikesSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  multimedia: {
    type: Array,
    required: true
  },
  short_url: {
    type: String,
    required: true
  },
  published_date: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("likes", LikesSchema);
