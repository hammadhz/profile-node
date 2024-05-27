const express = require("express");

const userRoute = express.Router();

const { setProfileCtrl } = require("../controllers/userCtrl");
const { authMiddleware } = require("../middleware/authMiddleware");
const { upload } = require("../utils/fileUpload");

userRoute.put(
  "/profile",
  authMiddleware,
  upload.single("profile"),
  setProfileCtrl
);

module.exports = userRoute;
