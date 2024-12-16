const bcrypt = require("bcryptjs");
const { sendResponse, AppError } = require("../../../helpers/utils");
const User = require("../../../models/user");

const changePassword = async (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      throw new AppError(404, "User not found", "NotFound");
    }

    const isMatch = await bcrypt.compare(oldPassword, user.passwordHash);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect old password" });
    }

    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const newPasswordHash = await bcrypt.hash(newPassword, salt);

    user.passwordHash = newPasswordHash;

    await user.save();

    sendResponse(
      res,
      200,
      true,
      { user },
      null,
      "Password updated successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = changePassword;
