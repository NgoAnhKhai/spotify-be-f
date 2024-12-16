const { sendResponse, AppError } = require("../../helpers/utils");
const Artist = require("../../models/artist");
const Song = require("../../models/song");

const createArtist = async (req, res, next) => {
  const info = req.body;

  if (!info) {
    throw new AppError(404, "No data provided");
  }

  try {
    const existingArtist = await Artist.findOne({ name: info.name });
    if (existingArtist) {
      throw new AppError(400, "Artist already exists");
    }

    const artist = await Artist.create(info);

    if (info.songs && info.songs.length > 0) {
      for (let songId of info.songs) {
        const song = await Song.findById(songId);
        if (!song) {
          throw new AppError(404, `Song with ID ${songId} not found`);
        }

        song.artistID = artist._id;
        await song.save();
      }
    }

    sendResponse(
      res,
      200,
      true,
      { artist },
      null,
      "Artist created successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = createArtist;
