const Joi = require("joi");

const updatePlaylistVSchema = Joi.object({
  title: Joi.string().min(1).max(255).optional(),
  description: Joi.string().max(500).optional(),
  songs: Joi.string().optional(),
});

module.exports = updatePlaylistVSchema;
