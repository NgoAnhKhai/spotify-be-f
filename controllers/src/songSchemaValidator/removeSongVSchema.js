const Joi = require("joi");

const removeSongVSchema = Joi.object({
  body: Joi.object({
    songId: Joi.string()
      .required()
      .regex(/^[0-9a-fA-F]{24}$/),
  }),
});

module.exports = removeSongVSchema;
