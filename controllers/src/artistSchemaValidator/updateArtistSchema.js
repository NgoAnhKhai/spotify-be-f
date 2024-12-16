const Joi = require("joi");

const updateArtistSchema = Joi.object({
  name: Joi.string().optional(),
  genres: Joi.optional().optional(),
  followersCount: Joi.number().integer().min(0).optional(),
  imageURL: Joi.string().uri().optional(),
  description: Joi.object({
    startYear: Joi.number().integer().min(1900).optional(),
    difficulties: Joi.string().optional(),
  }).optional(),
  songs: Joi.array()
    .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
    .optional(),
  albums: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .optional(),
});

module.exports = updateArtistSchema;
