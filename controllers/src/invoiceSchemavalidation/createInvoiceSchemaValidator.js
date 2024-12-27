const Joi = require("joi");

const createInvoiceSchemaValidator = Joi.object().max(0);

module.exports = createInvoiceSchemaValidator;
