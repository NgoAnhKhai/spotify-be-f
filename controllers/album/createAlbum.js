const { AppError, sendResponse } = require("../../helpers/utils");
const Album = require("../../models/album");
const Artist = require("../../models/artist");
const Song = require("../../models/song");

const createAlbum = async (req, res, next) => {
  const { title, releaseDate, artistID, genreID, coverImageURL, listSong } =
    req.body;

  if (!title || !artistID) {
    throw new AppError("Album title and artistID are required", 400);
  }

  try {
    const artist = await Artist.findById(artistID);
    if (!artist) {
      throw new AppError("Artist not found", 404);
    }

    const existingAlbum = await Album.findOne({ title, artistID });
    if (existingAlbum) {
      throw new AppError("Album with the same title already exists", 400);
    }

    if (listSong && listSong.length > 0) {
      const songs = await Song.find({ _id: { $in: listSong } });
      if (songs.length !== listSong.length) {
        throw new AppError("One or more songs not found", 404);
      }
    }

    const album = new Album({
      title,
      releaseDate,
      artistID,
      genreID,
      coverImageURL,
      listSong,
    });

    await album.save();

    artist.albums.push(album._id);
    await artist.save();

    sendResponse(res, 200, true, { album }, null, "Album created successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = createAlbum;
