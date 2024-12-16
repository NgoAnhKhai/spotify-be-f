const Joi = require("joi");

// Validation schema for cancelling subscription
const userCancelSubValidationSchema = Joi.object({}).optional();
module.exports = userCancelSubValidationSchema;
