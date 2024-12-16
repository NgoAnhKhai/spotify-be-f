const { sendResponse, AppError } = require("../../helpers/utils");
const Genre = require("../../models/genre");

const getAllGenre = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const genres = await Genre.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();

    const totalGenres = await Genre.countDocuments();

    if (!genres || genres.length === 0) {
      return sendResponse(res, 404, false, null, null, "No genres found");
    }

    const totalPages = Math.ceil(totalGenres / limit);

    sendResponse(
      res,
      200,
      true,
      {
        genres,
        pagination: {
          page,
          limit,
          totalPages,
          totalGenres,
        },
      },
      null,
      "Genres retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAllGenre;
