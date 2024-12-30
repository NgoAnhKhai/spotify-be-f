const { AppError, sendResponse } = require("../../helpers/utils");
const Playlist = require("../../models/playlist");
const User = require("../../models/user");

const updatePlaylist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, songs } = req.body;

    const playlist = await Playlist.findById(id);
    if (!playlist) {
      throw new AppError("Playlist not found", 404);
    }

    // Cập nhật thông tin playlist
    if (title) playlist.title = title;
    if (description) playlist.description = description;
    if (songs) playlist.songs = JSON.parse(songs);

    if (req.file && req.file.path) {
      playlist.coverImageURL = req.file.path;
    }

    await playlist.save();

    const updatedPlaylist = await Playlist.findById(playlist._id).populate({
      path: "songs",
      select: "title artist genre duration URL",
    });

    sendResponse(
      res,
      200,
      true,
      { playlist: updatedPlaylist },
      null,
      "Updated playlist successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = updatePlaylist;
