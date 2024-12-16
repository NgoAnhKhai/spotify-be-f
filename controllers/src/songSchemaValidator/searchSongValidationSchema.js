const Joi = require("joi");

// Validation schema for searching songs
const searchSongValidationSchema = Joi.object({
  title: Joi.string().optional(),
  page: Joi.number().integer().min(1).optional(),
  limit: Joi.number().integer().min(1).max(100).optional(),
});

module.exports = searchSongValidationSchema;
