const Joi = require("joi");

const updateGenreSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
});

module.exports = updateGenreSchema;
