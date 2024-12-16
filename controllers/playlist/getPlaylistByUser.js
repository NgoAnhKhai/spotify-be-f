const { AppError, sendResponse } = require("../../helpers/utils");
const Playlist = require("../../models/playlist");

const getPlaylistByUserid = async (req, res, next) => {
  const { userID } = req.params;
  const { page = 1, limit = 5 } = req.query;

  try {
    const skip = (page - 1) * limit;
    const playlists = await Playlist.find({ userID })
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 })
      .exec();
    const totalPlaylists = await Playlist.countDocuments({ userID });

    if (!playlists || playlists.length === 0) {
      throw new AppError("No playlists found for this user", 404);
    }
    const totalPages = Math.ceil(totalPlaylists / limit);
    sendResponse(
      res,
      200,
      true,
      {
        playlists,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          totalPages,
          totalPlaylists,
        },
      },
      null,
      "Playlist(s) fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getPlaylistByUserid;
