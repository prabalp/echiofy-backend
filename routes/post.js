const router = require("express").Router();
const {
  createPost,
  updatePost,
  getAllPostsbyClass,
  deletePost,
} = require("../controllers/postController");
const upload = require("../middlewares/upload_image");

router.route("/createpost").post(upload.uploadImg, createPost);
router.route("/getpostsbyclass").post(getAllPostsbyClass);
router.route("/updatepost/:id").post(upload.uploadImg, updatePost);

router.route("/deletepost").post(deletePost);

module.exports = router;
