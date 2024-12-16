const { AppError, sendResponse } = require("../../../helpers/utils");
const Artist = require("../../../models/artist");
const User = require("../../../models/user");

const revertToUser = async (req, res, next) => {
  const { userId } = req.body;

  try {
    // Tìm kiếm người dùng theo userId
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }

    // Kiểm tra nếu user không phải artist thì không cần revert
    if (user.role !== "artist") {
      throw new AppError("User is not an artist, no need to revert", 400);
    }

    // Thay đổi role của user về 'user'
    user.role = "user";
    await user.save(); // Lưu lại thay đổi trong cơ sở dữ liệu

    console.log(`User with ID ${userId} role reverted to 'user'`);

    // Xóa bản ghi Artist nếu tồn tại
    const artist = await Artist.findOne({ userId: user._id });
    if (artist) {
      await Artist.deleteOne({ _id: artist._id });
      console.log(`Artist with userId ${user._id} removed from database.`);
    } else {
      console.log(`No artist found for userId ${user._id}`);
    }

    // Phản hồi thành công
    sendResponse(res, 200, true, { user }, null, "Role reverted successfully");
  } catch (error) {
    // In ra lỗi nếu có để kiểm tra chi tiết
    console.error("Error in revertToUser:", error);
    next(error); // Truyền lỗi đến middleware xử lý lỗi
  }
};

module.exports = revertToUser;
