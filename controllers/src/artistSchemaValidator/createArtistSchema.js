const Joi = require("joi");

const createArtistSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  genres: Joi.string()
    .valid("Pop", "Rock", "US UK", "Hip Hop", "Ballad")
    .optional(),
  followersCount: Joi.number().min(0).default(0),
  imageURL: Joi.string().uri().optional(),
  description: Joi.object({
    startYear: Joi.number().min(1900).max(new Date().getFullYear()).required(),
    difficulties: Joi.string().optional(),
  }).optional(),

  songs: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .optional(),
  albums: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .optional(),
});

module.exports = createArtistSchema;
