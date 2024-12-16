const Joi = require("joi");

const UserUpdateSubValidationSchema = Joi.object({
  subscriptionType: Joi.string().valid("Free", "Premium").required(),
  premiumExpiryDate: Joi.date().optional(),
});

module.exports = UserUpdateSubValidationSchema;
