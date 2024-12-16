const { AppError, sendResponse } = require("../../helpers/utils");
const Genre = require("../../models/genre");

const createGenre = async (req, res, next) => {
  const { name, description } = req.body;
  try {
    const existingGenre = await Genre.findOne({ name });
    if (existingGenre) {
      throw new AppError(
        400,
        "Genre with this name already exists",
        "BadRequest"
      );
    }

    const genre = new Genre({
      name,
      description,
    });
    await genre.save();
    sendResponse(res, 200, true, { genre }, null, "Genre created successfully");
  } catch (error) {
    next(error);
  }
};
module.exports = createGenre;
