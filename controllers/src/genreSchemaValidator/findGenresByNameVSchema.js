const Joi = require("joi");

// Validation schema for finding genres by name
const findGenresByNameVSchema = Joi.object({
  name: Joi.string().trim().min(1).required(),
});

module.exports = findGenresByNameVSchema;
