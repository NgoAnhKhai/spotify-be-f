const { AppError, sendResponse } = require("../../helpers/utils");
const Song = require("../../models/song");

const searchSongs = async (req, res, next) => {
  const { title, page = 1, limit = 5 } = req.query;

  if (title && typeof title !== "string") {
    return next(new AppError("Title must be a string", 400));
  }

  try {
    const searchQuery = [];

    if (title) {
      console.log(`Searching for title: ${title}`);
      searchQuery.push({
        title: { $regex: title, $options: "i" },
      });
    }

    if (searchQuery.length === 0) {
      throw new AppError("Please provide a search query", 400);
    }

    const skip = (page - 1) * limit;

    const songs = await Song.find({ $or: searchQuery })
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 })
      .populate("artistID")
      .exec();

    const totalSongs = await Song.countDocuments({ $or: searchQuery });

    if (songs.length === 0) {
      throw new AppError("No songs found", 404);
    }

    const totalPages = Math.ceil(totalSongs / limit);

    sendResponse(
      res,
      200,
      true,
      {
        songs,
        pagination: {
          limit: parseInt(limit),
          page: parseInt(page),
          totalPages,
          totalSongs,
        },
      },
      null,
      "Songs found successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = searchSongs;
