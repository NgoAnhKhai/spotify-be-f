const { sendResponse, AppError } = require("../../helpers/utils");
const Playlist = require("../../models/playlist");

const removeSong = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { songId } = req.body;

    const playlist = await Playlist.findById(id);
    if (!playlist) {
      throw new AppError("Playlist not found", 404);
    }

    if (!playlist.songs.includes(songId)) {
      throw new AppError("Song not found in playlist", 404);
    }

    playlist.songs = playlist.songs.filter(
      (song) => song.toString() !== songId.toString()
    );

    await playlist.save();

    sendResponse(
      res,
      200,
      true,
      { playlist },
      null,
      "Song removed from playlist successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = removeSong;
