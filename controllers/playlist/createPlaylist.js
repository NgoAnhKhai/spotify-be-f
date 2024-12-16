const { AppError, sendResponse } = require("../../helpers/utils");
const Playlist = require("../../models/playlist");
const User = require("../../models/user");

const createPlaylist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title || !id) {
      throw new AppError("Playlist title and userId are required", 400);
    }

    const userExists = await User.findById(id);
    if (!userExists) {
      throw new AppError("User not found", 404);
    }

    const playlist = await Playlist.create({ title, userID: id, songs: [] });

    const populatedPlaylist = await Playlist.findById(playlist._id).populate({
      path: "songs",
      select: "title artist genre duration URL",
    });

    sendResponse(
      res,
      200,
      true,
      { playlist: populatedPlaylist },
      null,
      "Created playlist successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = createPlaylist;
