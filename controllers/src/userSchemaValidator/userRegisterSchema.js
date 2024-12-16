const Joi = require("joi");

const userRegisterSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .max(30)
    .required()
    .regex(/^[a-zA-Z0-9\s]+$/),
  email: Joi.string()
    .email()
    .required()
    .pattern(/^[a-zA-Z0-9]+@(gmail\.com|hotmail\.com)$/),
  password: Joi.string(),
});
module.exports = userRegisterSchema;
