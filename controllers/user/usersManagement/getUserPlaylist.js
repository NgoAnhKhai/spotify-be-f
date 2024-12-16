const Playlist = require("../../../models/playlist");
const { sendResponse, AppError } = require("../../../helpers/utils");

const getUserPlaylist = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const playlists = await Playlist.find({ userID: req.user.userId })
      .skip(skip)
      .limit(limit)
      .populate("userID", "username email")
      .populate("songs")
      .exec();
    const totalPlaylists = await Playlist.countDocuments({
      userID: req.user.userId,
    });
    if (!playlists || playlists.length === 0) {
      throw new AppError(404, "No playlists found for this user", "NotFound");
    }
    const totalPages = Math.ceil(totalPlaylists / limit);
    sendResponse(
      res,
      200,
      true,
      {
        playlists,
        pagination: {
          page,
          limit,
          totalPages,
          totalPlaylists,
        },
      },
      null,
      "User playlists fetched successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getUserPlaylist;
