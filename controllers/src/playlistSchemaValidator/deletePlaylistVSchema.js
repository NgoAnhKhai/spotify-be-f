const Joi = require("joi");

// Validation schema for deleting a playlist
const deletePlaylistVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = deletePlaylistVSchema;
