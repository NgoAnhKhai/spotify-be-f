const { sendResponse, AppError } = require("../../helpers/utils");
const Album = require("../../models/album");
const Song = require("../../models/song");

const getAllAlbum = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const albums = await Album.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("listSong");

    const totalAlbums = await Album.countDocuments();

    for (let album of albums) {
      const validSongs = await Song.find({
        _id: { $in: album.listSong.map((song) => song._id) },
      });

      album.listSong = validSongs;
    }

    if (!albums || albums.length === 0) {
      return sendResponse(res, 404, false, null, null, "No albums found");
    }

    const totalPages = Math.ceil(totalAlbums / limit);

    sendResponse(
      res,
      200,
      true,
      {
        albums,
        pagination: {
          page,
          limit,
          totalPages,
          totalAlbums,
        },
      },
      null,
      "Albums retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAllAlbum;
