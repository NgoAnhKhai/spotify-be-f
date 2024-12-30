const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dldvsgsfh",
  api_key: process.env.CLOUDINARY_API_KEY || "824676152779954",
  api_secret:
    process.env.CLOUDINARY_API_SECRET || "cKQPQAtO6nSscp6ASp-_I0q45uE",
});

module.exports = cloudinary;
