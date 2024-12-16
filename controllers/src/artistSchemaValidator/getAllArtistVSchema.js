const Joi = require("joi");

// Validation schema for getting all artists
const getAllArtistVSchema = Joi.object({
  limit: Joi.number().integer().min(1).max(100).optional(),
  page: Joi.number().integer().min(1).optional(),
});

module.exports = getAllArtistVSchema;
