const Joi = require("joi");

// Validation schema for finding a user by name
const getUserByNameVSchema = Joi.object({
  name: Joi.string().trim().min(1).required(),
});

module.exports = getUserByNameVSchema;
