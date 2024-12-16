const { sendResponse, AppError } = require("../../../helpers/utils");
const User = require("../../../models/user");

const updateUser = async (req, res, next) => {
  const { username, email } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      throw new AppError(404, "User not found", "NotFound");
    }

    user.username = username || user.username;
    user.email = email || user.email;

    await user.save();

    sendResponse(res, 200, true, { user }, null, "User updated successfully!");
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;
