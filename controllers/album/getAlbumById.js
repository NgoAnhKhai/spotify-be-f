const { AppError, sendResponse } = require("../../helpers/utils");
const Album = require("../../models/album");
const Song = require("../../models/song");

const getAlbumById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const album = await Album.findById(id)
      .populate({ path: "listSong", model: "Song" })
      .populate({
        path: "artistID",
        model: "Artist",
      });
    if (!album) {
      throw new AppError("Album not found", 404);
    }

    // Lọc danh sách bài hát hợp lệ
    const validSongs = await Song.find({
      _id: { $in: album.listSong.map((song) => song._id) },
    });

    album.listSong = validSongs; // Cập nhật danh sách bài hát hợp lệ

    sendResponse(res, 200, true, { album }, null, "Album fetched successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = getAlbumById;
