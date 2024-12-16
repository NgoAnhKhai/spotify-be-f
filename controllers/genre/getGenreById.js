const { AppError, sendResponse } = require("../../helpers/utils");
const Genre = require("../../models/genre");

const getGenreById = async (req, res, next) => {
  const genreId = req.params.id;
  try {
    const genre = await Genre.findById(genreId);
    if (!genre) {
      throw new AppError("Genre not found", 404);
    }
    sendResponse(res, 200, true, { genre }, null, "Genre Fetch Successfully");
  } catch (error) {
    next(error);
  }
};
module.exports = getGenreById;
