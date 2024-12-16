const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    title: { type: String },
    userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String },
    songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
    creationDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
