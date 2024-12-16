const { AppError, sendResponse } = require("../../helpers/utils");
const Album = require("../../models/album");
const Artist = require("../../models/artist");
const Song = require("../../models/song");

const deleteSong = async (req, res, next) => {
  const { id } = req.params;

  try {
    const song = await Song.findByIdAndDelete(id);
    if (!song) {
      throw new AppError("Song not found", 404);
    }
    const album = await Album.findById(song.albumID);
    if (album) {
      album.listSong = album.listSong.filter(
        (songId) => songId.toString() !== id
      );
      await album.save();
    }

    const artist = await Artist.findById(song.artistID);
    if (artist) {
      artist.songs = artist.songs.filter((songId) => songId.toString() !== id);
      await artist.save();
    }
    sendResponse(res, 200, true, null, null, "Song deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = deleteSong;
