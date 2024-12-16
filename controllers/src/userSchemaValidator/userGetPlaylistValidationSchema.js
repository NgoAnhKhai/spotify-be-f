const Joi = require("joi");
const userGetPlaylistValidationSchema = Joi.object({
  limit: Joi.number().integer().min(1).max(100).optional(),
  page: Joi.number().integer().min(1).optional(),
});

module.exports = userGetPlaylistValidationSchema;
