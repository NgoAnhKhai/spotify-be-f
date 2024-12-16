const { AppError, sendResponse } = require("../../helpers/utils");
const Artist = require("../../models/artist");
const Song = require("../../models/song");

const updateSong = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    duration,
    popularity,
    artistID,
    albumID,
    genreID,
    URL,
    coverImageURL,
  } = req.body;

  try {
    const updatedSong = await Song.findByIdAndUpdate(
      id,
      {
        title,
        duration,
        popularity,
        artistID,
        albumID,
        genreID,
        URL,
        coverImageURL,
      },
      { new: true }
    );

    if (!updatedSong) {
      throw new AppError("not found", 400);
    }

    const artist = await Artist.findById(artistID);
    if (artist) {
      if (!artist.songs.includes(updatedSong._id)) {
        artist.songs.push(updatedSong._id);
        await artist.save();
      }
    }

    sendResponse(res, 200, true, { updatedSong }, null, "updated successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = updateSong;
