const router = require("express").Router();
const {
  createPost,
  getAllPostsbyClass,
  deletePost,
} = require("../controllers/postController");

router.route("/createpost").post(createPost);
router.route("/getpostsbyclass").post(getAllPostsbyClass);

router.route("/deletepost").post(deletePost);

module.exports = router;
