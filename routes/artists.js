var express = require("express");
const getAllArtist = require("../controllers/artist/getAllArtist");
const createArtist = require("../controllers/artist/createArtist");
const deleteArtist = require("../controllers/artist/deleteArtist");
const getArtistById = require("../controllers/artist/getArtistById");
const updateArtist = require("../controllers/artist/updateArtist");
const validationMiddleware = require("../middlewares/validation.middleware");
const createArtistSchema = require("../controllers/src/artistSchemaValidator/createArtistSchema");
const updateArtistSchema = require("../controllers/src/artistSchemaValidator/updateArtistSchema");
const authenticate = require("../middlewares/authenticate");
const getAllArtistVSchema = require("../controllers/src/artistSchemaValidator/getAllArtistVSchema");
const getArtistByIdVSchema = require("../controllers/src/artistSchemaValidator/getArtistByIdVSchema");

var router = express.Router();

/*
 *@route GET /artists/
 *@description get all artist
 *@access login required
 */
router.get(
  "/",
  validationMiddleware(getAllArtistVSchema),
  authenticate(["user", "admin"]),
  getAllArtist
);

/*
 *@route GET /artists/:id
 *@description get Artist By ID
 *@access login required
 */
router.get(
  "/:id",
  validationMiddleware(getArtistByIdVSchema, "params"),
  authenticate(["user", "admin"]),
  getArtistById
);

module.exports = router;
