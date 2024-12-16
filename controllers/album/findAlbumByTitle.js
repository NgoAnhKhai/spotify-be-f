const { AppError, sendResponse } = require("../../helpers/utils");
const Album = require("../../models/album");

const findAlbumByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;
    const albums = await Album.findOne({
      title: { $regex: title, $options: "i" },
    });

    if (albums.length === 0) {
      throw new AppError("No albums found with that title");
    }

    sendResponse(res, 200, true, { albums }, null, "find album successfully");
  } catch (error) {
    throw new Error(error.message || "An error occurred while finding albums");
  }
};

module.exports = findAlbumByTitle;
