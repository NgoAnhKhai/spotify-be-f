const { sendResponse, AppError } = require("../../helpers/utils");
const Song = require("../../models/song");

const getAllSong = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "desc" ? -1 : 1;

    const validSortFields = ["createdAt", "title", "popularity"];
    if (!validSortFields.includes(sortBy)) {
      return sendResponse(res, 400, false, null, null, "Invalid sort field");
    }

    const songs = await Song.find()
      .populate("artistID")
      .sort({ [sortBy]: order })
      .skip(skip)
      .limit(limit)
      .exec();

    const totalSong = await Song.countDocuments();

    const totalPages = Math.ceil(totalSong / limit);

    sendResponse(
      res,
      200,
      true,
      {
        songs,
        pagination: {
          page,
          limit,
          totalPages,
          totalSong,
        },
      },
      null,
      "Get All Songs Successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAllSong;
