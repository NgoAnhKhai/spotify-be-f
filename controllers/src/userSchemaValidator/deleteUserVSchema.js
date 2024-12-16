const Joi = require("joi");

// Validation schema for deleting a user
const deleteUserVSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = deleteUserVSchema;
