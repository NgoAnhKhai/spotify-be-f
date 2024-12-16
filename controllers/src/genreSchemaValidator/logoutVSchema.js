const Joi = require("joi");

// Validation schema for logout
const logoutVSchema = Joi.object({}).required();
module.exports = logoutVSchema;
