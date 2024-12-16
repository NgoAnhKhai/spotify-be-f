const bcrypt = require("bcryptjs");

const User = require("../../../models/user");
const { AppError, sendResponse } = require("../../../helpers/utils");

const register = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      if (userExists.email === email && userExists.username === username) {
        throw new AppError(
          400,
          "Email and username already in use",
          "BadRequest"
        );
      } else if (userExists.email === email) {
        throw new AppError(400, "Email already in use", "BadRequest");
      } else if (userExists.username === username) {
        throw new AppError(400, "Username already in use", "BadRequest");
      }
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      username,
      passwordHash,
    });

    await newUser.save();

    sendResponse(
      res,
      201,
      true,
      { user: newUser },
      null,
      "User registered successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = register;
