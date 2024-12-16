const jwt = require("jsonwebtoken");
const { AppError } = require("../helpers/utils");

const authenticate = (roles = "user") => {
  if (typeof roles === "string") {
    roles = [roles];
  }
  return (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new AppError("Token not provided", 404);
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;

      if (roles.length && !roles.includes(req.user.role)) {
        throw new AppError("Access denied. Insufficient permissions", 403);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = authenticate;
