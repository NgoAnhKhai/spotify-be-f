const Joi = require("joi");

const userLoginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .pattern(/^[a-zA-Z0-9]+@(gmail\.com|hotmail\.com)$/),
  password: Joi.string(),
});
module.exports = userLoginSchema;
