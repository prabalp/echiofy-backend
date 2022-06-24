const User = require("../models/user");
const {
  successmessage,
  generateToken,
  hashPassword,
  verifypassword,
  errormessage,
} = require("../middlewares/util");

module.exports.UserSignup = async (req, res) => {
  try {
    const { email, password, name, number } = req.body;
    console.log("User Data", req.body);
    const user = await User.findOne({ email: email });

    if (user) {
      return res
        .status(200)
        .json(successmessage("User already exists!", email));
    }

    const newPassword = hashPassword(password);

    const createUser = await User.create({
      name: name,
      email: email,
      number: number,
      password: newPassword,
    });

    // const token = generateToken(JSON.stringify(createUser._id));

    return res
      .status(200)
      .json(successmessage("Registered Successfuly!", createUser._id));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

module.exports.UserLogin = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select("password");

    if (!user) {
      return res.status(200).json(errormessage("User does not exists"));
    }

    const verify = verifypassword(password, user.password);

    if (!verify) {
      return res.status(200).json(errormessage("Invalid Credentials"));
    }

    // const token = generateToken(JSON.stringify(user._id));

    return res
      .status(200)
      .json(successmessage("Logged In Successfuly!", user._id));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

//forget password
module.exports.ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(200).json(errormessage("User does not exists"));
    }

    //send email that will have a page to reset the link to the user
    return res
      .status(200)
      .json(successmessage("Password reset link sent to your email!"));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

module.exports.FacebookLogin = async () => {};
