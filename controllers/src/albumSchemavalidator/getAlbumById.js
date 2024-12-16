const Joi = require("joi");

// Validation schema for getting an album by ID
const getAlbumByIdVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = getAlbumByIdVSchema;
