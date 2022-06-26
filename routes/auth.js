const router = require("express").Router();
const {
  UserLogin,
  UserSignup,
  ForgetPassword,
  GetUser,
  UpdateUser,
  GetUsersByNameCategory,
} = require("../controllers/authController");

router.route("/user/login").post(UserLogin);
router.route("/user/signup").post(UserSignup);
router.route("/user/getuser/:id").get(GetUser);
router.route("/user/updateuser/:id").post(UpdateUser);
router.route("/user/updateuser/:id").post(UpdateUser);
router.route("/user/getuserbynamecategory").post(GetUsersByNameCategory);

router.route("/user/forgot-password").put(ForgetPassword);

module.exports = router;
