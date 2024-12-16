const { sendResponse, AppError } = require("../../helpers/utils");
const Playlist = require("../../models/playlist");

const getAllPlaylist = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    const playlist = await Playlist.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    const totalPlaylists = await Playlist.countDocuments();
    if (!playlist || playlist.length === 0) {
      return sendResponse(res, 404, false, null, null, "No found");
    }
    const totalPages = Math.ceil(totalPlaylists / limit);
    sendResponse(
      res,
      200,
      true,
      {
        playlists: playlist,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          totalPages,
          totalPlaylists,
        },
      },
      null,
      "Successfully"
    );
  } catch (error) {
    next(error);
  }
};
module.exports = getAllPlaylist;
