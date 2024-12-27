const { AppError, sendResponse } = require("../../../../helpers/utils");
const Artist = require("../../../../models/artist");
const User = require("../../../../models/user");

const followArtist = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { artistId } = req.params;
    const artist = await Artist.findById(artistId);
    if (!artist) {
      throw new AppError("Artist not found", 404);
    }
    const user = await User.findById(userId);
    if (user.favoriteArtists.includes(artistId)) {
      throw new AppError("Already Follwing this Artist", 400);
    }
    user.favoriteArtists.push(artistId);
    await user.save();
    artist.followers.push(userId);
    artist.followersCount += 1;
    await artist.save();
    sendResponse(
      res,
      200,
      true,
      { user, isFollowing: true },
      "Following Artist successfully"
    );
  } catch (error) {
    next(error);
  }
};
module.exports = followArtist;
