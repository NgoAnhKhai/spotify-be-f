const Joi = require("joi");

const findSongByTitleVSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
});

module.exports = findSongByTitleVSchema;
