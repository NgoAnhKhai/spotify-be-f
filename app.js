const { sendResponse, AppError } = require("./helpers/utils");
require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const songsRouter = require("./routes/songs");
const playlistsRouter = require("./routes/playlists");
const invoicesRouter = require("./routes/invoices");
const genresRouter = require("./routes/genres");
const artistRouter = require("./routes/artists");
const albumsRouter = require("./routes/albums");
const authenticatetionsRouter = require("./routes/authentication");
const adminRouter = require("./routes/admin");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log(`connected to ${mongoURI}`))
  .catch((err) => console.log(err));

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/users", usersRouter);
app.use("/songs", songsRouter);
app.use("/playlists", playlistsRouter);
app.use("/invoices", invoicesRouter);
app.use("/genres", genresRouter);
app.use("/artists", artistRouter);
app.use("/albums", albumsRouter);
app.use("/authentications", authenticatetionsRouter);
app.use((req, res, next) => {
  const err = new AppError(404, "Not Found");
  next(err);
});

app.use((err, req, res, next) => {
  console.log("ERROR", err);
  return sendResponse(
    res,
    err.statusCode ? err.statusCode : 500,
    false,
    null,
    { message: err.message },
    err.isOperational ? err.errorType : "Internal Server Error"
  );
});
module.exports = app;
