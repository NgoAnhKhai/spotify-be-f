var express = require("express");

const getGenreById = require("../controllers/genre/getGenreById");
const getAllGenre = require("../controllers/genre/getAllGenre");
const authenticate = require("../middlewares/authenticate");
const validationMiddleware = require("../middlewares/validation.middleware");
const getAllGenreVSchema = require("../controllers/src/genreSchemaValidator/getAllGenreVSchema");
const getGenreByIdVSchema = require("../controllers/src/genreSchemaValidator/getGenreByIdVSchema");
var router = express.Router();

/*
 *@route GET /genres/
 *@description get all genre
 *@access login required
 */
router.get(
  "/",
  validationMiddleware(getAllGenreVSchema),
  authenticate(["user", "admin"]),
  getAllGenre
);

/*
 *@route GET /genres/:id
 *@description get genre by idGenre
 *@access login required
 */
router.get(
  "/:id",
  validationMiddleware(getGenreByIdVSchema, "params"),
  authenticate(["user", "admin"]),
  getGenreById
);

module.exports = router;
