var express = require("express");
const authenticate = require("../middlewares/authenticate");
const assignRole = require("../controllers/user/roleManagement/assignRole");
const getAllUser = require("../controllers/user/adminManagement/getAllUser");
const createSong = require("../controllers/song/createSong");
const updateSong = require("../controllers/song/updateSong");
const deleteSong = require("../controllers/song/deleteSong");
const updateSongSchema = require("../controllers/src/songSchemaValidator/updateSongSchema");
const createSongSchema = require("../controllers/src/songSchemaValidator/createSongSchema");
const validationMiddleware = require("../middlewares/validation.middleware");
const createGenre = require("../controllers/genre/createGenre");
const updateGenreSchema = require("../controllers/src/genreSchemaValidator/updateGenreSchema");
const createGenreSchema = require("../controllers/src/genreSchemaValidator/createGenreSchema");
const createArtist = require("../controllers/artist/createArtist");
const createArtistSchema = require("../controllers/src/artistSchemaValidator/createArtistSchema");
const updateArtist = require("../controllers/artist/updateArtist");
const updateArtistSchema = require("../controllers/src/artistSchemaValidator/updateArtistSchema");
const deleteArtist = require("../controllers/artist/deleteArtist");
const createAlbum = require("../controllers/album/createAlbum");
const createAlbumShema = require("../controllers/src/albumSchemavalidator/createAlbumShema");
const updateAlbum = require("../controllers/album/updateAlbum");
const updateAlbumSchema = require("../controllers/src/albumSchemavalidator/updateAlbumSchema");
const deleteAlbum = require("../controllers/album/deleteAlbum");
const updateGenre = require("../controllers/genre/updateGenre");
const deleteGenre = require("../controllers/genre/deleteGenre");
const DeleteUser = require("../controllers/user/adminManagement/deleteUser");
const revertToUser = require("../controllers/user/roleManagement/revertToUser");
const findUserByName = require("../controllers/user/adminManagement/FindUserbyName");
const findArtistByName = require("../controllers/artist/findArtistByName");
const findAlbumByTitle = require("../controllers/album/findAlbumByTitle");
const findGenresByName = require("../controllers/genre/findGenreByName");
const findSongByTitle = require("../controllers/song/findSongByTitle");
const getAllUserVSchema = require("../controllers/src/userSchemaValidator/getAllUserVSchema");
const getUserByNameVSchema = require("../controllers/src/userSchemaValidator/findUserByNameVSchema");
const deleteUserVSchema = require("../controllers/src/userSchemaValidator/deleteUserVSchema");
const getArtistByNameVSchema = require("../controllers/src/artistSchemaValidator/findArtistByNameVSchema");
const deleteArtistVSchema = require("../controllers/src/artistSchemaValidator/deleteArtistVSchema");
const findAlbumByTitleVSchema = require("../controllers/src/albumSchemavalidator/findAlbumByTitleVSchema");
const deleteAlbumVSchema = require("../controllers/src/albumSchemavalidator/deleteAlbumVSchema");
const findGenresByNameVSchema = require("../controllers/src/genreSchemaValidator/findGenresByNameVSchema");
const deleteGenreVSchema = require("../controllers/src/genreSchemaValidator/deleteGenreVSchema");
const findSongByTitleVSchema = require("../controllers/src/songSchemaValidator/findSongByTitleVSchema");
const deleteSongVSchema = require("../controllers/src/songSchemaValidator/deleteSongVSchema");
const assignRoleVSchema = require("../controllers/src/userSchemaValidator/assignRoleVSchema");
const revertToUserVSchema = require("../controllers/src/userSchemaValidator/revertTouserVSchema");

var router = express.Router();
router.get("/dashboard", authenticate("admin"), (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the dashboard",
    user: req.user,
  });
});

/*
 *@route GET admin/users
 *@description Get List All User(For Admin)
 *@access private
 */
router.get(
  "/users",
  validationMiddleware(getAllUserVSchema),
  authenticate("admin"),
  getAllUser
);

/*
 *@route GET admin/users/find
 *@description Find User(For Admin)
 *@access private
 */
router.get(
  "/users/find",
  validationMiddleware(getUserByNameVSchema),
  authenticate("admin"),
  findUserByName
);

/*
 *@route GET admin/users
 *@description Get List All User(For Admin)
 *@access private
 */
router.delete(
  "/users/:id",
  validationMiddleware(deleteUserVSchema, "params"),
  authenticate("admin"),
  DeleteUser
);

/*
 *@route POST admin/artists
 *@description create artist
 *@access private
 */
router.post(
  "/artists",
  validationMiddleware(createArtistSchema, "body"),
  authenticate("admin"),
  createArtist
);

/*
 *@route PUT admin/artists/:id
 *@description update Information Of Artist
 *@access private
 */
router.put(
  "/artists/:id",
  validationMiddleware(updateArtistSchema, "body"),
  authenticate("admin"),
  updateArtist
);

/*
 *@route GET admin/artists/find
 *@description find Information Of Artist by name
 *@access private
 */
router.get(
  "/artists/find",
  validationMiddleware(getArtistByNameVSchema, "query"),
  authenticate("admin"),
  findArtistByName
);

/*
 *@route DELETE admin/artists/:id
 *@description DELETE artist
 *@access private
 */
router.delete(
  "/artists/:id",
  validationMiddleware(deleteArtistVSchema, "params"),
  authenticate("admin"),
  deleteArtist
);

/*
 *@route POST /admin/albums
 *@description create Album
 *@access login required
 */
router.post(
  "/albums",
  validationMiddleware(createAlbumShema, "body"),
  authenticate("admin"),
  createAlbum
);

/*
 *@route PUT admin/albums/:id
 *@description update Album by id
 *@access login required
 */
router.put(
  "/albums/:id",
  validationMiddleware(updateAlbumSchema, "body"),
  authenticate("admin"),
  updateAlbum
);

/*
 *@route GET admin/albums/find
 *@description find album by name
 *@access login required
 */
router.get(
  "/albums/find",
  validationMiddleware(findAlbumByTitleVSchema, "query"),
  authenticate("admin"),
  findAlbumByTitle
);

/*
 *@route DELETE album/albums/:id
 *@description delete album by id album
 *@access login required
 */
router.delete(
  "/albums/:id",
  validationMiddleware(deleteAlbumVSchema, "params"),
  authenticate("admin"),
  deleteAlbum
);

/*
 *@route POST admin/genres
 *@description create genre
 *@access private
 */
router.post(
  "/genres",
  validationMiddleware(createGenreSchema, "body"),
  authenticate("admin"),
  createGenre
);

/*
 *@route PUT admin/genres/:id
 *@description update genre by id
 *@access private
 */
router.put(
  "/genres/:id",
  validationMiddleware(updateGenreSchema, "body"),
  authenticate("admin"),
  updateGenre
);

/*
 *@route GET admin/genres/find
 *@description find genre by name
 *@access private
 */
router.get(
  "/genres/find",
  validationMiddleware(findGenresByNameVSchema, "query"),
  authenticate("admin"),
  findGenresByName
);

/*
 *@route DELETE admin/genres/:id
 *@description delete genre
 *@access private
 */
router.delete(
  "/genres/:id",
  validationMiddleware(deleteGenreVSchema, "params"),
  authenticate("admin"),
  deleteGenre
);

/*
 *@route POST admin/songs
 *@description create song
 *@access private
 */
router.post(
  "/songs",
  validationMiddleware(createSongSchema, "body"),
  authenticate("admin"),
  createSong
);

/*
 *@route PUT admin/songs/:id
 *@description update Song
 *@access private
 */
router.put(
  "/songs/:id",
  validationMiddleware(updateSongSchema, "body"),
  authenticate("admin"),
  updateSong
);

/*
 *@route GET admin/songs/find
 *@description find Song by title
 *@access private
 */
router.get(
  "/songs/find",
  validationMiddleware(findSongByTitleVSchema, "query"),
  authenticate("admin"),
  findSongByTitle
);

/*
 *@route DELETE admin/songs/delete/:id
 *@description delete song
 *@access private
 */
router.delete(
  "/songs/:id",
  validationMiddleware(deleteSongVSchema),
  authenticate("admin"),
  deleteSong
);

/*
 *@route PUT admin/assign-role
 *@description Assign role for user(For Admin)
 *@access private
 */
router.post(
  "/assignRole",
  validationMiddleware(assignRoleVSchema, "body"),
  authenticate("admin"),
  assignRole
);

/*
 *@route PUT admin/assign-role
 *@description Assign role for user(For Admin)
 *@access private
 */
router.post(
  "/revertToUser",
  validationMiddleware(revertToUserVSchema, "body"),
  authenticate("admin"),
  revertToUser
);

module.exports = router;
