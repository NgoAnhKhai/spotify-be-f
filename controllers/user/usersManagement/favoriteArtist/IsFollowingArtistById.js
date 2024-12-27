const { AppError, sendResponse } = require("../../../../helpers/utils");
const Artist = require("../../../../models/artist");
const User = require("../../../../models/user");

const IsFollowingArtistById = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { artistId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ isFollowing: false });
    }

    const isFollowing = user.favoriteArtists.includes(artistId);

    sendResponse(
      res,
      200,
      true,
      { isFollowing },
      "Check Following Artist successfully"
    );
  } catch (error) {
    next(error);
  }
};
module.exports = IsFollowingArtistById;
