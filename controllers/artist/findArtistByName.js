const { AppError, sendResponse } = require("../../helpers/utils");
const Artist = require("../../models/artist");

const findArtistByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) {
      throw new AppError("Name query parameter is required", 400);
    }

    const artists = await Artist.findOne({
      name: { $regex: name, $options: "i" },
    })
      .populate("songs", "title duration")
      .populate("albums", "title releaseDate");

    if (!artists || artists.length === 0) {
      throw new AppError("No artists found with that name", 404);
    }
    sendResponse(res, 200, true, { artists }, null, "successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = findArtistByName;
