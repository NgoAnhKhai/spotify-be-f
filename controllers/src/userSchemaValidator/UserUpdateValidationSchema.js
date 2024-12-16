const Joi = require("joi");

const UserUpdateValidationSchema = Joi.object({
  username: Joi.string().min(3).max(50).optional(),
  email: Joi.string().email().optional(),
});

module.exports = UserUpdateValidationSchema;
