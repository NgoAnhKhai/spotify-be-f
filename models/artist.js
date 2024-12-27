const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: { type: String, required: true },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    genres: [{ type: String }],
    followersCount: { type: Number, default: 0 },
    imageURL: { type: String },
    role: {
      type: String,
      enum: ["user", "artist", "admin", "staff"],
      default: "artist",
      required: true,
    },
    description: {
      startYear: { type: Number, required: true },
      difficulties: { type: String },
    },
    songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
    albums: [{ type: Schema.Types.ObjectId, ref: "Album" }],
  },

  { timestamps: true }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
