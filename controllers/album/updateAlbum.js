const { sendResponse, AppError } = require("../../helpers/utils");
const Album = require("../../models/album");
const Song = require("../../models/song");
const mongoose = require("mongoose");

const updateAlbum = async (req, res, next) => {
  const albumId = req.params.id;
  const updatedInfo = req.body;

  if (!updatedInfo) {
    throw new AppError(400, "Please provide album information to update");
  }

  try {
    const album = await Album.findById(albumId);
    if (!album) {
      throw new AppError(404, "Album not found");
    }

    if (updatedInfo.listSong && updatedInfo.listSong.length > 0) {
      for (let songId of updatedInfo.listSong) {
        if (!mongoose.Types.ObjectId.isValid(songId)) {
          throw new AppError(
            400,
            `Song with ID ${songId} is not a valid ObjectId`
          );
        }

        const song = await Song.findById(songId);
        if (!song) {
          throw new AppError(400, `Song with ID ${songId} does not exist`);
        }
      }
    }

    // Cập nhật các trường thông tin trong album
    album.title = updatedInfo.title || album.title;
    album.releaseDate = updatedInfo.releaseDate || album.releaseDate;
    album.artistID = updatedInfo.artistID || album.artistID;
    album.coverImageURL = updatedInfo.coverImageURL || album.coverImageURL;
    album.genreID = updatedInfo.genreID || album.genreID;

    // Nếu có danh sách bài hát mới, cập nhật lại listSong
    if (updatedInfo.listSong && updatedInfo.listSong.length > 0) {
      // Lấy danh sách songId hiện tại trong album
      const currentSongIds = album.listSong.map((song) => song.toString());

      // Lọc ra các songId mới mà chưa có trong album
      const newSongs = updatedInfo.listSong.filter(
        (songId) => !currentSongIds.includes(songId)
      );

      // Thêm các bài hát mới vào listSong của album
      album.listSong.push(...newSongs);

      // Cập nhật lại albumID cho tất cả bài hát mới thêm vào
      for (let songId of newSongs) {
        await Song.findByIdAndUpdate(songId, { albumID: album._id });
      }

      // Lọc ra các songId không còn trong listSong (nếu có) và bỏ chúng khỏi album
      const songsToRemove = currentSongIds.filter(
        (songId) => !updatedInfo.listSong.includes(songId)
      );
      for (let songId of songsToRemove) {
        await Song.findByIdAndUpdate(songId, { $unset: { albumID: 1 } });
      }
    }

    // Lưu lại album sau khi cập nhật
    await album.save();

    // Trả về album đã được cập nhật
    sendResponse(res, 200, true, { album }, null, "Album updated successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = updateAlbum;
