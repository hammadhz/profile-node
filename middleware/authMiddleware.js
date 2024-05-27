const Client = require("../models/Client");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  let token;
  if (req.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers?.authorization?.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.SECRET_JWT);
        const user = await Client.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      res.json({
        message: "Not Authorized token expired. Please Login again.",
      });
    }
  } else {
    res.json({ message: "There is no token attached to header" });
  }
};

module.exports = {
  authMiddleware,
};
