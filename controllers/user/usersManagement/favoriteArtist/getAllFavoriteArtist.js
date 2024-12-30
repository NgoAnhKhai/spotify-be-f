const { AppError, sendResponse } = require("../../../../helpers/utils");
const User = require("../../../../models/user");

const getAllFavoriteArtists = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;
    const skip = (page - 1) * limit;

    const { userId } = req.user;

    const user = await User.findById(userId).select("favoriteArtists");
    if (!user) {
      throw new AppError("User not found", 404);
    }

    const totalArtists = user.favoriteArtists.length;
    const totalPages = Math.ceil(totalArtists / limit);

    const paginatedFavoriteArtists = await User.findById(userId)
      .populate({
        path: "favoriteArtists",
        options: {
          skip: skip,
          limit: limit,
        },
      })
      .select("favoriteArtists");

    const responseData = {
      user: {
        favoriteArtists: paginatedFavoriteArtists.favoriteArtists,
      },
      pagination: {
        page,
        limit,
        totalPages,
        totalArtists,
      },
    };

    sendResponse(
      res,
      200,
      true,
      responseData,
      null,
      "Get all favorite artists successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAllFavoriteArtists;
