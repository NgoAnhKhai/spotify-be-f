const Joi = require("joi");

// Validation schema for reverting a user to a normal role
const revertToUserVSchema = Joi.object({
  userId: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = revertToUserVSchema;
