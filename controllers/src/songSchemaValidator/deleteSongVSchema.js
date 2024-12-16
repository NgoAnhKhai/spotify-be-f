const Joi = require("joi");

// Validation schema for deleting a song
const deleteSongVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = deleteSongVSchema;
