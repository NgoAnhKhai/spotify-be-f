const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    subscriptionType: {
      type: String,
      enum: ["Free", "Premium"],
      default: "Free",
    },
    role: {
      type: String,
      enum: ["user", "artist", "admin", "staff"],
      default: "user",
      required: true,
    },
    premiumExpiryDate: { type: Date },
    playlists: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
    favoriteArtists: {
      type: [Schema.Types.ObjectId],
      ref: "Artist",
      default: [],
    },
    remainingDays: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
