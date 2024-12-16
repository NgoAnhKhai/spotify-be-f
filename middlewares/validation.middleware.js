const { AppError } = require("../helpers/utils");

const validationMiddleware = (schema, keyword) => (req, res, next) => {
  const { error } = schema.validate(req[keyword]);
  if (error) {
    throw new AppError(400, error.details[0].message);
  }
  next();
};
module.exports = validationMiddleware;
