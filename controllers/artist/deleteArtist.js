const { sendResponse, AppError } = require("../../helpers/utils");
const Artist = require("../../models/artist");
const User = require("../../models/user");
const Song = require("../../models/song");
const Album = require("../../models/album");

const deleteArtist = async (req, res, next) => {
  const artistId = req.params.id;

  if (!artistId) {
    throw new AppError(400, "Artist ID is required");
  }

  try {
    const artist = await Artist.findByIdAndDelete(artistId);

    if (!artist) {
      throw new AppError(404, "Artist not found");
    }

    await Song.deleteMany({ artistID: artistId });

    await Album.deleteMany({ artistID: artistId });

    const user = await User.findById(artist.userId);
    if (user) {
      user.role = "user";
      await user.save();
    }

    sendResponse(
      res,
      200,
      true,
      { artist },
      null,
      "Artist, songs, albums deleted and user role reverted to 'user' successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = deleteArtist;
