const router = require("express").Router();
const {
  UserLogin,
  UserSignup,
  ForgetPassword,
} = require("../controllers/authController");

router.route("/user/login").post(UserLogin);
router.route("/user/signup").post(UserSignup);

router.route("/user/forgot-password").put(ForgetPassword);

module.exports = router;
