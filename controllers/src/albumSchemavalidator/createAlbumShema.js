const Joi = require("joi");

const createAlbumShema = Joi.object({
  title: Joi.string().min(3).max(100).required(),

  releaseDate: Joi.date().optional().required(),

  artistID: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),
  coverImageURL: Joi.string().uri().optional().required(),

  genreID: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .optional(),
  listSong: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .optional(),
});

module.exports = createAlbumShema;
