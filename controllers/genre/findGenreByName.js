const { AppError, sendResponse } = require("../../helpers/utils");
const Genre = require("../../models/genre");

const findGenresByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const genres = await Genre.findOne({
      name: { $regex: name, $options: "i" },
    });

    if (genres.length === 0) {
      throw new AppError("No genres found with that name");
    }

    sendResponse(res, 200, true, { genres }, null, "find genres successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = findGenresByName;
