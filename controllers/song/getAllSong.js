const { sendResponse, AppError } = require("../../helpers/utils");
const Song = require("../../models/song");

const getAllSong = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const song = await Song.find()
      .populate("artistID")
      .skip(skip)
      .limit(limit)
      .exec();
    const totalSong = await Song.countDocuments();
    if (!song || song.length === 0) {
      return sendResponse(res, 404, false, null, null, "No found");
    }
    const totalPages = Math.ceil(totalSong / limit);
    sendResponse(
      res,
      200,
      true,
      {
        songs: song,
        pagination: {
          page,
          limit,
          totalPages,
          totalSong,
        },
      },
      null,
      "Get All Song Successfully"
    );
  } catch (error) {
    next(error);
  }
};
module.exports = getAllSong;
