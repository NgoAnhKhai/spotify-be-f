const { AppError, sendResponse } = require("../../helpers/utils");
const Artist = require("../../models/artist");

const updateArtist = async (req, res, next) => {
  const artistId = req.params.id;
  const updateData = req.body;

  if (!artistId) {
    throw new AppError(400, "Artist ID is required");
  }

  try {
    const artist = await Artist.findById(artistId);

    if (!artist) {
      throw new AppError(404, "Artist not found");
    }

    for (let key in updateData) {
      if (updateData.hasOwnProperty(key) && artist[key] !== undefined) {
        artist[key] = updateData[key];
      }
    }

    await artist.save();

    sendResponse(
      res,
      200,
      true,
      { artist },
      null,
      "Artist updated successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = updateArtist;
