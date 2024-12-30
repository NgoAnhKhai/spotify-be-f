const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "playlists",
    allowed_formats: ["jpeg", "png", "jpg", "gif"],
  },
});

const upload = multer({ storage });

module.exports = upload;
