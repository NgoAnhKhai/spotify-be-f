const { AppError, sendResponse } = require("../../../../helpers/utils");
const Artist = require("../../../../models/artist");
const User = require("../../../../models/user");

const unfollowArtist = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { artistId } = req.params;
    const artist = await Artist.findById(artistId);
    if (!artist) {
      throw new AppError("Artist not found", 404);
    }

    const user = await User.findById(userId);
    if (!user.favoriteArtists.includes(artistId)) {
      throw new AppError("You are not following this artist", 400);
    }

    user.favoriteArtists.pull(artistId);
    await user.save();
    artist.followers.pull(userId);
    artist.followersCount = Math.max(artist.followersCount - 1, 0);
    await artist.save();

    sendResponse(
      res,
      200,
      true,
      { user, isFollowing: false },
      null,
      "unfollowing successfully"
    );
  } catch (error) {
    next(error);
  }
};
module.exports = unfollowArtist;
