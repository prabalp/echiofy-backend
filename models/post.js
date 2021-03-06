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
  image: {
    type: String,
    // required: true,
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
  stars: {
    type: Number,
    default: 0,
  },
  class: {
    type: String,
    required: true,
  },
  starsUser: {
    type: Map,
    of: Number,
  },
});

module.exports = mongoose.model("Post", PostSchema);
