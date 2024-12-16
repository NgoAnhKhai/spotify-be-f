const { AppError, sendResponse } = require("../../../helpers/utils");
const Artist = require("../../../models/artist");
const User = require("../../../models/user");

const assignRole = async (req, res, next) => {
  const { userId, newRole, artistDetails } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }

    const validRoles = ["user", "artist", "admin", "staff"];
    if (!validRoles.includes(newRole)) {
      throw new AppError("Invalid role provided", 400);
    }

    user.role = newRole;
    await user.save();

    if (newRole === "artist") {
      if (!artistDetails || !artistDetails.name || !artistDetails.startYear) {
        throw new AppError(
          "Artist details are required when assigning 'artist' role",
          400
        );
      }

      const artist = new Artist({
        userId: user._id,
        name: artistDetails.name,
        genres: artistDetails.genres || [],
        followersCount: artistDetails.followersCount || 0,
        imageURL: artistDetails.imageURL || "",
        description: {
          startYear: artistDetails.startYear,
          difficulties: artistDetails.difficulties || "",
        },
        songs: artistDetails.songs || [],
        albums: artistDetails.albums || [],
      });

      await artist.save();

      sendResponse(
        res,
        200,
        true,
        { user, artist },
        null,
        "Role assigned successfully"
      );
    } else {
      sendResponse(
        res,
        200,
        true,
        { user },
        null,
        "Role assigned successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

module.exports = assignRole;
