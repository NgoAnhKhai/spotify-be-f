const { AppError, sendResponse } = require("../../helpers/utils");
const Playlist = require("../../models/playlist");

const deletePlaylist = async (req, res, next) => {
  const id = req.params.id;
  try {
    const playlist = await Playlist.findByIdAndDelete(id);
    if (!playlist) {
      throw new AppError("Not Found", 40);
    }
    sendResponse(res, 200, true, { playlist }, null, "deleted successfull");
  } catch (error) {
    next(error);
  }
};
module.exports = deletePlaylist;
