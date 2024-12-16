const Joi = require("joi");

// Validation schema for getting an artist by ID
const getArtistByIdVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = getArtistByIdVSchema;
