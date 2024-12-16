const { sendResponse, AppError } = require("../../helpers/utils");
const Genre = require("../../models/genre");

const deleteGenre = async (req, res, next) => {
  const genreId = req.params.id;

  try {
    const deletedGenre = await Genre.findByIdAndDelete(genreId);

    if (!deletedGenre) {
      throw new AppError(404, "Genre not found", "NotFound");
    }

    sendResponse(
      res,
      200,
      true,
      { genre: deletedGenre },
      null,
      "Genre deleted successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = deleteGenre;
