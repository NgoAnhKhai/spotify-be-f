const { AppError, sendResponse } = require("../../helpers/utils");
const Playlist = require("../../models/playlist");

const getPlaylistById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const playlist = await Playlist.findById(id).populate({
      path: "songs",
      populate: {
        path: "artistID",
        model: "Artist",
      },
    });
    if (!playlist) {
      throw new AppError("Playlist not found", 404);
    }
    sendResponse(
      res,
      200,
      true,
      { playlist },
      null,
      "Playlist By ID successfully"
    );
  } catch (error) {
    next(error);
  }
};
module.exports = getPlaylistById;
