var express = require("express");
const getAllSong = require("../controllers/song/getAllSong");
const getSongById = require("../controllers/song/getSongById");
const searchSongs = require("../controllers/song/searchSong");
const authenticate = require("../middlewares/authenticate");
const validationMiddleware = require("../middlewares/validation.middleware");
const getAllSongValidationSchema = require("../controllers/src/songSchemaValidator/getAllSongValidationSchema");
const searchSongValidationSchema = require("../controllers/src/songSchemaValidator/searchSongValidationSchema");
const GetSongByIdVSchema = require("../controllers/src/songSchemaValidator/getSongByIdVSchema");
var router = express.Router();

/*
 *@route GET /songs
 *@description Get all song
 *@access public
 */
router.get("/", validationMiddleware(getAllSongValidationSchema), getAllSong);

/*
 *@route GET /songs/search?title=...
 *@description search song by name
 *@access public
 */
router.get(
  "/search",
  validationMiddleware(searchSongValidationSchema, "query"),
  searchSongs
);

/*
 *@route GET /songs/:id
 *@description get song by id song
 *@access login required
 */
router.get(
  "/:id",
  validationMiddleware(GetSongByIdVSchema, "params"),
  authenticate(["user", "admin"]),
  getSongById
);

module.exports = router;
