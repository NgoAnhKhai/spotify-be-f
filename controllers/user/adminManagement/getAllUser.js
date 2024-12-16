const { sendResponse, AppError } = require("../../../helpers/utils");
const User = require("../../../models/user");

const getAllUser = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    const users = await User.find().skip(skip).limit(limit);
    const totalUsers = await User.countDocuments();

    if (users.length === 0) {
      return sendResponse(res, 404, false, null, null, "No users found");
    }

    const totalPages = Math.ceil(totalUsers / limit);
    sendResponse(
      res,
      200,
      true,
      {
        users,
        pagination: {
          page,
          limit,
          totalPages,
          totalUsers,
        },
      },
      null,
      "Fetched users successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAllUser;
