const { sendResponse, AppError } = require("../../helpers/utils");
const Playlist = require("../../models/playlist");

const Song = require("../../models/song");

const addSongToPlaylist = async (req, res, next) => {
  const { id } = req.params;
  const { songID } = req.body;

  if (!songID || songID.length === 0) {
    throw new AppError("Please provide songId(s)", 400);
  }

  try {
    const playlist = await Playlist.findById(id);
    if (!playlist) {
      throw new AppError("Playlist not found", 404);
    }

    const songsToAdd = Array.isArray(songID) ? songID : [songID];

    const existingSongs = playlist.songs;
    const newSongs = songsToAdd.filter(
      (songID) => !existingSongs.includes(songID)
    );

    if (newSongs.length === 0) {
      throw new AppError(
        "All the provided songs already exist in the playlist",
        400
      );
    }

    for (const songID of newSongs) {
      const songExists = await Song.findById(songID);
      if (!songExists) {
        throw new AppError(`Song with id ${songID} not found`, 404);
      }
    }

    playlist.songs.push(...newSongs);

    await playlist.save();

    sendResponse(
      res,
      200,
      true,
      { playlist },
      null,
      "Song(s) added to playlist successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = addSongToPlaylist;
