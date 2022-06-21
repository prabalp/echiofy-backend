const Post = require("../models/post");
const { errormessage, successmessage } = require("../middlewares/util");

module.exports.createPost = async (req, res) => {
  try {
    const { title, content, userid, post_class } = req.body;
    const post = await Post.create({
      title: title,
      content: content,
      user: userid,
      class: post_class,
    });
    return res
      .status(200)
      .json(successmessage("Post created successfully", post));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

module.exports.getAllPostsbyClass = async (req, res) => {
  try {
    const posts = await Post.find({ class: req.body.post_class });
    return res
      .status(200)
      .json(successmessage("Posts fetched successfully", posts));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    //querry 2 parameters post id and userid then delete
    const post = await Post.findByIdAndDelete(req.body.post_id);
    return res
      .status(200)
      .json(successmessage("Post deleted successfully", post));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};
