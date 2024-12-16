const Joi = require("joi");

// Validation schema for getting all users
const getAllUserVSchema = Joi.object({
  limit: Joi.number().integer().min(1).max(100).optional(),
  page: Joi.number().integer().min(1).optional(),
});

module.exports = getAllUserVSchema;
