const { AppError, sendResponse } = require("../../helpers/utils");
const Artist = require("../../models/artist");

const getArtistById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const artist = await Artist.findById(id)
      .populate({
        path: "songs",
        model: "Song",
        populate: {
          path: "artistID",
          model: "Artist",
          select: "-__v -createdAt -updatedAt",
        },
      })
      .populate("albums");
    if (!artist) {
      throw new AppError("not found", 404);
    }
    sendResponse(res, 200, true, { artist }, null, "Artist has been found");
  } catch (error) {
    next(error);
  }
};
module.exports = getArtistById;
