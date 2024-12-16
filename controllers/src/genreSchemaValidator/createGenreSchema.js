const Joi = require("joi");

const createGenreSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
});

module.exports = createGenreSchema;
