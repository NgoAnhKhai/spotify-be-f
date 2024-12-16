const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema(
  {
    title: { type: String, required: true },
    releaseDate: { type: Date },
    artistID: { type: Schema.Types.ObjectId, ref: "Artist" },
    coverImageURL: { type: String },
    genreID: { type: Schema.Types.ObjectId, ref: "Genre" },
    listSong: [{ type: Schema.Types.ObjectId, ref: "Song" }],
  },
  { timestamps: true }
);

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
