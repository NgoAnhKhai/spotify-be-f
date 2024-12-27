const Joi = require("joi");

const GetUserInvoice = Joi.object({
  invoice_id: Joi.string().required(),
  user_id: Joi.string().required(),
});

module.exports = GetUserInvoice;
