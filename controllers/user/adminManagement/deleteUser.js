const { sendResponse, AppError } = require("../../../helpers/utils");
const User = require("../../../models/user");

const DeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    sendResponse(res, 200, true, null, "User deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = DeleteUser;
