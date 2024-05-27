const express = require("express");

const authRouter = express.Router();

const { createUser, login } = require("../controllers/authCtrl");

authRouter.post("/register", createUser);
authRouter.post("/login", login);

module.exports = authRouter;
