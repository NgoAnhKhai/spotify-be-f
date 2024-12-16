const Joi = require("joi");

// Validation schema for getting albums by artist
const getAlbumsByArtistVSchema = Joi.object({
  params: Joi.object({
    artistID: Joi.string()
      .required()
      .regex(/^[0-9a-fA-F]{24}$/),
  }),
  query: Joi.object({
    limit: Joi.number().integer().min(1).max(100).optional(),
    page: Joi.number().integer().min(1).optional(),
  }),
});

module.exports = getAlbumsByArtistVSchema;
