var express = require("express");
const validationMiddleware = require("../middlewares/validation.middleware");
const logout = require("../controllers/authentication/authUser/logout");
const login = require("../controllers/authentication/authUser/Login");
const register = require("../controllers/authentication/authUser/register");
const userRegisterSchema = require("../controllers/src/userSchemaValidator/userRegisterSchema");
const userLoginSchema = require("../controllers/src/userSchemaValidator/userLoginSchema");
const authenticate = require("../middlewares/authenticate");
const logoutVSchema = require("../controllers/src/genreSchemaValidator/logoutVSchema");

var router = express.Router();

/*
 *@route POST /authentications/register
 *@description register
 *@access public
 */
router.post(
  "/register",
  validationMiddleware(userRegisterSchema, "body"),
  register
);

/*
 *@route POST /authentications/login
 *@description Login
 *@access public
 */
router.post("/login", validationMiddleware(userLoginSchema, "body"), login);

/*
 *@route POST /authentications/logout
 *@description Logout User
 *@access login Required
 */
router.post(
  "/logout",
  validationMiddleware(logoutVSchema),
  authenticate(["user", "admin"]),
  logout
);

module.exports = router;
