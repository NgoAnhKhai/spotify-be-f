const { AppError, sendResponse } = require("../../../helpers/utils");
const User = require("../../../models/user");

const findUserByName = async (req, res, next) => {
  try {
    const { name } = req.query;

    if (!name) {
      throw new AppError("Name parameter is required", 400);
    }

    const user = await User.findOne({
      username: { $regex: name, $options: "i" },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    sendResponse(res, 200, true, { user }, null, "User found successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = findUserByName;
