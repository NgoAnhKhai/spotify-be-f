const Joi = require("joi");

const addSongToPlaylistSchema = Joi.object({
  songID: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
});

module.exports = addSongToPlaylistSchema;
