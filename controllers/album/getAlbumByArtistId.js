const { AppError, sendResponse } = require("../../helpers/utils");
const Album = require("../../models/album");

const getAlbumsByArtist = async (req, res, next) => {
  const { artistID } = req.params;

  try {
    const limit = parseInt(req.query.limit) || 4;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const albums = await Album.find({ artistID })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("listSong")
      .exec();

    const totalAlbums = await Album.countDocuments({ artistID });

    if (!albums || albums.length === 0) {
      throw new AppError("No albums found for this artist", 404);
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
      "Albums fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAlbumsByArtist;
