const Joi = require("joi");

const findAlbumByTitleVSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
});

module.exports = findAlbumByTitleVSchema;
