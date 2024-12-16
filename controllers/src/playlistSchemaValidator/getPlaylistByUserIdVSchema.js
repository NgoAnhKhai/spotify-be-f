const Joi = require("joi");

// Validation schema for getting playlists by user ID
const getPlaylistByUserIdSchema = Joi.object({
  userID: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
  limit: Joi.number().integer().min(1).max(100).optional(),
  page: Joi.number().integer().min(1).optional(),
});

module.exports = getPlaylistByUserIdSchema;
