const Joi = require("joi");

const cancelPaymentSchemaValidator = Joi.object({
  invoiceId: Joi.string().hex().length(24).required(),
});

module.exports = cancelPaymentSchemaValidator;
