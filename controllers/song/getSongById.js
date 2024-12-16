const { sendResponse } = require("../../helpers/utils");
const Song = require("../../models/song");

const getSongById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const song = await Song.findById(id)
      .populate("artistID")
      .populate("genreID");
    sendResponse(res, 200, true, { song }, null, "Get Song By ID Successfully");
  } catch (error) {
    next(error);
  }
};
module.exports = getSongById;
