const Joi = require("joi");

const completePaymentSchemaValidator = Joi.object({
  invoiceId: Joi.string().hex().length(24).required(),
});

module.exports = completePaymentSchemaValidator;
