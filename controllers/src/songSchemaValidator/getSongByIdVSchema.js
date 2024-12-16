const Joi = require("joi");

const GetSongByIdVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = GetSongByIdVSchema;
