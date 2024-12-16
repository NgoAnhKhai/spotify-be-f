const Joi = require("joi");

const getPlaylistByIdVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = getPlaylistByIdVSchema;
