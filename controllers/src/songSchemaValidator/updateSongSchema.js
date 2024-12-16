const Joi = require("joi");

const updateSongSchema = Joi.object({
  title: Joi.string(),

  duration: Joi.string().pattern(/^\d{1,2}:\d{2}$/),

  popularity: Joi.number().min(0).default(0),

  artistID: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  albumID: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  coverImageURL: Joi.string().uri(),
  genreID: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .min(1),
  URL: Joi.string().uri(),
});

module.exports = updateSongSchema;
