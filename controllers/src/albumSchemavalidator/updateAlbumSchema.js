const Joi = require("joi");

const updateAlbumSchema = Joi.object({
  title: Joi.string(),
  releaseDate: Joi.date().optional(),
  artistID: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .optional(),
  coverImageURL: Joi.string().uri().optional(),
  genreID: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .optional(),
  listSong: Joi.array()
    .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
    .optional(),
});

module.exports = updateAlbumSchema;
