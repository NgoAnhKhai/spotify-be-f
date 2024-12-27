const Joi = require("joi");

const getPendingInvoiceSchemaValidator = Joi.object().max(0);

module.exports = getPendingInvoiceSchemaValidator;
