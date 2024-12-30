var express = require("express");
const getAllPlaylist = require("../controllers/playlist/getAllPlaylist");
const createPlaylist = require("../controllers/playlist/createPlaylist");
const addSongToPlaylist = require("../controllers/playlist/addSongToPlaylist");
const deletePlaylist = require("../controllers/playlist/deleteSong");
const removeSong = require("../controllers/playlist/removeSongToPlaylist");
const getPlaylistById = require("../controllers/playlist/getPlaylistById");
const getPlaylistByUserid = require("../controllers/playlist/getPlaylistByUser");
const validationMiddleware = require("../middlewares/validation.middleware");
const createPlaylistSchema = require("../controllers/src/playlistSchemaValidator/createPlaylistSchema");
const addSongToPlaylistSchema = require("../controllers/src/playlistSchemaValidator/addSongToPlaylistSchema");
const authenticate = require("../middlewares/authenticate");
const getAllPlaylistVSchema = require("../controllers/src/playlistSchemaValidator/getAllPlaylistVSchema");
const getPlaylistByUserIdSchema = require("../controllers/src/playlistSchemaValidator/getPlaylistByUserIdVSchema");
const getPlaylistByIdVSchema = require("../controllers/src/playlistSchemaValidator/getPlaylistByIdVSchema");
const removeSongVSchema = require("../controllers/src/songSchemaValidator/removeSongVSchema");
const deletePlaylistVSchema = require("../controllers/src/playlistSchemaValidator/deletePlaylistVSchema");
const upload = require("../middlewares/multer.middleware");
const updatePlaylistVSchema = require("../controllers/src/playlistSchemaValidator/updatePlaylistVSchema");
const updatePlaylist = require("../controllers/playlist/updatePlaylist");

var router = express.Router();

/*
 *@route POST /playlists/
 *@description create playlist of user
 *@access login required
 */
router.post(
  "/:id",
  upload.single("coverImageURL"),
  validationMiddleware(createPlaylistSchema, "body"),
  authenticate(["user", "admin"]),
  createPlaylist
);

/*
 *@route POST /playlists/:id/add
 *@description add song to playlist
 *@access login required
 */
router.post(
  "/:id/add",
  validationMiddleware(addSongToPlaylistSchema, "body"),
  authenticate(["user", "admin"]),
  addSongToPlaylist
);

/*
 *@route GET /playlists/
 *@description Get all playlist
 *@access login required
 */
router.get(
  "/",
  validationMiddleware(getAllPlaylistVSchema),
  authenticate(["user", "admin"]),
  getAllPlaylist
);

/*
 *@route GET /playlists/user/:userID
 *@description get playlist by userID
 *@access login required
 */
router.get(
  "/users/:userID",
  validationMiddleware(getPlaylistByUserIdSchema, "params"),
  authenticate(["user", "admin"]),
  getPlaylistByUserid
);

/*
 *@route GET /playlists/:id
 *@description Get playlist by playlist id
 *@access login required
 */
router.get(
  "/:id",
  validationMiddleware(getPlaylistByIdVSchema, "params"),
  authenticate(["user", "admin"]),
  getPlaylistById
);

/*
 *@route delete /playlists/remove/:id
 *@description remove song from playlist
 *@access login required
 */
router.delete("/:id", authenticate(["user", "admin"]), removeSong);

/*
 *@route DELETE /playlists/:id
 *@description delete playlist of user
 *@access login required
 */
router.delete(
  "/:id/delete",
  validationMiddleware(deletePlaylistVSchema, "params"),
  authenticate(["user", "admin"]),
  deletePlaylist
);

/*
 *@route PUT /playlists/:id
 *@description Update playlist by ID
 *@access login required
 */
router.put(
  "/:id",
  authenticate(["user", "admin"]),
  upload.single("coverImage"),
  updatePlaylist
);

module.exports = router;
