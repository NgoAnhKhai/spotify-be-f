const Joi = require("joi");

const deleteAlbumVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = deleteAlbumVSchema;
