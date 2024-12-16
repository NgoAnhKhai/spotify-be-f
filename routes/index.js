const express = require("express");
const router = express.Router();
const users = require("./users");
const songs = require("./songs");
const playlists = require("./playlists");
const artists = require("./artists");
const albums = require("./albums");
const authentications = require("./authentication");
const genres = require("./genres");
const invoices = require("./invoices");
const admin = require("./admin");
router.get("/template/:test", async (req, res, next) => {
  const { test } = req.params;
  try {
    //turn on to test error handling
    if (test === "error") {
      throw new AppError(401, "Access denied", "Authentication Error");
    } else {
      sendResponse(
        res,
        200,
        true,
        { data: "template" },
        null,
        "template success"
      );
    }
  } catch (err) {
    next(err);
  }
});
router.use("/users", users);

router.use("/songs", songs);

router.use("/playlists", playlists);

router.use("/invoices", invoices);

router.use("/genres", genres);

router.use("/artists", artists);

router.use("/albums", albums);

router.use("/admin", admin);

router.use("/authentications", authentications);
module.exports = router;
