// src/controllers/albumController.js
const { AppError, sendResponse } = require("../../helpers/utils");
const Album = require("../../models/album");

const getAlbumById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const album = await Album.findById(id)
      .populate({
        path: "listSong",
        model: "Song",
        populate: {
          path: "artistID",
          model: "Artist",
          select: "-__v -createdAt -updatedAt",
        },
      })
      .populate({
        path: "artistID",
        model: "Artist",
        select: "-__v -createdAt -updatedAt",
      })
      .lean(); // Thêm .lean() để trả về plain object

    console.log("Lean Populated Album Data:", JSON.stringify(album, null, 2));

    if (!album) {
      throw new AppError("Album not found", 404);
    }

    sendResponse(res, 200, true, { album }, null, "Album fetched successfully");
  } catch (error) {
    console.error("Error in getAlbumById:", error); // Log lỗi chi tiết
    next(error);
  }
};

module.exports = getAlbumById;
