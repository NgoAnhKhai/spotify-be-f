const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    popularity: { type: Number, default: 0 },
    artistID: { type: Schema.Types.ObjectId, ref: "Artist", required: true },
    albumID: { type: Schema.Types.ObjectId, ref: "Album", required: true },
    genreID: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    coverImageURL: { type: String },
    URL: { type: String, required: true },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
