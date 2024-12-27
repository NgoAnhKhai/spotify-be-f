var express = require("express");

const changePassword = require("../controllers/user/usersManagement/changePassword");
const updateSubscription = require("../controllers/user/usersManagement/updateSubscription");
const getUserPlaylist = require("../controllers/user/usersManagement/getUserPlaylist");
const updateUser = require("../controllers/user/usersManagement/updateUser");
const cancelSubscription = require("../controllers/user/usersManagement/cancelSubscription");
const authenticate = require("../middlewares/authenticate");
const validationMiddleware = require("../middlewares/validation.middleware");
const userChangePassSchema = require("../controllers/src/userSchemaValidator/userChangePassSchema");
const userGetProfileValidationSchema = require("../controllers/src/userSchemaValidator/userGetProfileValidationSchema");
const UserUpdateValidationSchema = require("../controllers/src/userSchemaValidator/UserUpdateValidationSchema");
const UserUpdateSubValidationSchema = require("../controllers/src/userSchemaValidator/userUpdateSubValidationSchema");
const getUserProfile = require("../controllers/user/usersManagement/getUserProfile");
const followArtist = require("../controllers/user/usersManagement/favoriteArtist/followArtist");
const unfollowArtist = require("../controllers/user/usersManagement/favoriteArtist/unfollowArtist");
const getAllFavoriteArtists = require("../controllers/user/usersManagement/favoriteArtist/getAllFavoriteArtist");
const IsFollowingArtistById = require("../controllers/user/usersManagement/favoriteArtist/IsFollowingArtistById");

var router = express.Router();

/*
 *@route GET /users/:id/profile
 *@description Get The Profile Of user
 *@access Login Required
 */
router.get(
  "/:id/profile",
  authenticate(["user", "admin"]),
  validationMiddleware(userGetProfileValidationSchema),
  getUserProfile
);

/*
 *@route PUT /users/:id/profile
 *@description update profile user
 *@access Login Required
 */
router.put(
  "/:id/profile",
  validationMiddleware(UserUpdateValidationSchema, "body"),
  authenticate(["user", "admin"]),
  updateUser
);
/*
 *@route PUT /users/:id/profile/password
 *@description Change Password
 *@access Login Required
 */
router.put(
  "/:id/profile/changePassword",
  validationMiddleware(userChangePassSchema, "body"),
  authenticate(["user", "admin"]),
  changePassword
);

/*
 *@route PUT /users/:id/buy
 *@description Buy Subscription
 *@access Login Required
 */
router.put(
  "/:id/buy",
  validationMiddleware(UserUpdateSubValidationSchema, "body"),
  authenticate(["user", "admin"]),
  updateSubscription
);

/*
 *@route PUT /users/:id/cancel
 *@description cancel Subscription
 *@access Login Required
 */
router.put(
  "/:id/cancel",

  authenticate(["user", "admin"]),
  cancelSubscription
);

/*
 *@route GET /users/:id/playlists
 *@description Get The playlist of user
 *@access Login Required
 */
router.get("/:id/playlists", authenticate(["user", "admin"]), getUserPlaylist);

/*
 *@route POST /users/follow/artistId
 *@description POST following artists
 *@access Login Required
 */
router.post("/follow/:artistId", authenticate(["user", "admin"]), followArtist);

/*
 *@route Delete /users/unfollow/artistId
 *@description Unfollowing artists
 *@access Login Required
 */
router.delete(
  "/unfollow/:artistId",
  authenticate(["user", "admin"]),
  unfollowArtist
);

/*
 *@route GET /users/favorite-artists
 *@description Get all the artists favorite
 *@access Login Required
 */
router.get(
  "/favorite-artists",
  authenticate(["user", "admin"]),
  getAllFavoriteArtists
);

/*
 *@route GET /users/following/:id
 *@description Get all the artists favorite
 *@access Login Required
 */
router.get(
  "/follow/:artistId",
  authenticate(["user", "admin"]),
  IsFollowingArtistById
);

module.exports = router;
