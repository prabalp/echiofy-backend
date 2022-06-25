const router = require("express").Router();
const {
  createPost,
  updatePost,
  getAllPostsbyClass,
  deletePost,
  updateStars,
  getAllPosts,
} = require("../controllers/postController");
const upload = require("../middlewares/upload_image");

router.route("/createpost").post(upload.uploadImg, createPost);
router.route("/getpostsbyclass").post(getAllPostsbyClass);
router.route("/updatepost/:id").post(upload.uploadImg, updatePost);
router.route("/getallposts").get(getAllPosts);
router.route("/updateStars/:user_id/:post_id").get(updateStars);

router.route("/deletepost").post(deletePost);

module.exports = router;
