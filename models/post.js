const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  starts: {
    type: Number,
    default: 0,
  },
  class: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
