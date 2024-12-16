const Joi = require("joi");

// Validation schema for deleting a genre
const deleteGenreVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = deleteGenreVSchema;
