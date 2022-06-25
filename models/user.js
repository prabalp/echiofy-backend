const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  number: {
    type: Number,
    required: true,
  },
  socialMedia: {
    instaram: {
      link: String,
      folllowers: Number,
    },
    facebook: {
      link: String,
      folllowers: Number,
    },
    twitter: {
      link: String,
      folllowers: Number,
    },
    youtube: {
      link: String,
      folllowers: Number,
    },
  },
  accountType: {
    type: String,
    default: "influencer",
  },
});

module.exports = mongoose.model("User", UserSchema);
