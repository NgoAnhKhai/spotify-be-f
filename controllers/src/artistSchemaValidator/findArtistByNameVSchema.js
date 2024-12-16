const Joi = require("joi");

const getArtistByNameVSchema = Joi.object({
  name: Joi.string().trim().min(1).required(),
});

module.exports = getArtistByNameVSchema;
