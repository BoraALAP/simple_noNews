const mongoose = require("mongoose");

const LikesSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("likes", LikesSchema);
