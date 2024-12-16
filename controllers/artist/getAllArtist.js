const { sendResponse, AppError } = require("../../helpers/utils");
const Artist = require("../../models/artist");

const getAllArtist = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 4;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const artists = await Artist.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("songs")
      .populate("albums")
      .exec();

    const totalArtists = await Artist.countDocuments();

    if (!artists || artists.length === 0) {
      return sendResponse(res, 404, false, null, null, "No artists found");
    }

    const totalPages = Math.ceil(totalArtists / limit);

    sendResponse(
      res,
      200,
      true,
      {
        artists,
        pagination: {
          page,
          limit,
          totalPages,
          totalArtists,
        },
      },
      null,
      "Artists retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAllArtist;
