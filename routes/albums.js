var express = require("express");
const getAllAlbum = require("../controllers/album/getAllAlbum");
const getAlbumById = require("../controllers/album/getAlbumById");
const getAlbumsByArtist = require("../controllers/album/getAlbumByArtistId");
const authenticate = require("../middlewares/authenticate");
const validationMiddleware = require("../middlewares/validation.middleware");
const getAlbumByIdVSchema = require("../controllers/src/albumSchemavalidator/getAlbumById");
const getAlbumsByArtistVSchema = require("../controllers/src/albumSchemavalidator/getAlbumsByArtistVSchema");
const getAllAlbumsVSchema = require("../controllers/src/albumSchemavalidator/getAllAlbumVSchema");

var router = express.Router();

/*
 *@route GET /albums/:id
 *@description get album by id album
 *@access login required
 */
router.get(
  "/:id",
  validationMiddleware(getAlbumByIdVSchema, "params"),
  getAlbumById
);

/*
 *@route GET /albums/artist/:artistID
 *@description get Album by artistID
 *@access login required
 */
router.get(
  "/artists/:artistID",
  validationMiddleware(getAlbumsByArtistVSchema, "params"),
  authenticate(["user", "admin"]),
  getAlbumsByArtist
);

/*
 *@route GET /albums/
 *@description get all Album
 *@access public
 */
router.get("/", validationMiddleware(getAllAlbumsVSchema), getAllAlbum);

module.exports = router;
