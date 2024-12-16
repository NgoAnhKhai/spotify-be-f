const Joi = require("joi");

const userChangePassSchema = Joi.object({
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
  confirmPassword: Joi.string().required().valid(Joi.ref("newPassword")),
});

module.exports = userChangePassSchema;
