const { AppError, sendResponse } = require("../../helpers/utils");
const Song = require("../../models/song");
const findSongByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;
    const song = await Song.findOne({
      title: { $regex: title, $options: "i" },
    }).populate([
      { path: "artistID", select: "name" },
      { path: "albumID", select: "title" },
      { path: "genreID", select: "name" },
    ]);

    if (!song) {
      throw new AppError("Song not found", 404);
    }

    sendResponse(
      res,
      200,
      true,
      { song },
      null,
      "find song by title successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = findSongByTitle;
