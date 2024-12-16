const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { AppError, sendResponse } = require("../../../helpers/utils");
const User = require("../../../models/user");

require("dotenv").config();

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError("user not found", 404);
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      throw new AppError("invalid credentials", 400);
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    sendResponse(
      res,
      200,
      true,
      { token, role: user.role },
      null,
      "successfully login"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = login;
