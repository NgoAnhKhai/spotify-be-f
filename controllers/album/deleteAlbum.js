const { AppError, sendResponse } = require("../../helpers/utils");
const Album = require("../../models/album");

const deleteAlbum = async (req, res, next) => {
  const { id } = req.params;

  try {
    const album = await Album.findByIdAndDelete(id);
    if (!album) {
      throw new AppError("Album not found", 404);
    }

    sendResponse(res, 200, true, { album }, null, "Album deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = deleteAlbum;
