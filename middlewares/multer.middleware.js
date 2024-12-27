// middleware/multer.js

const multer = require("multer");
const path = require("path");
const { AppError } = require("../helpers/utils");

// Cấu hình lưu trữ
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Bộ lọc tệp tin
const fileFilter = function (req, file, cb) {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new AppError(400, "Only JPEG, JPG, and PNG files are allowed"));
};

// Tạo middleware upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn kích thước tệp 5MB
  fileFilter: fileFilter,
});

module.exports = upload;
