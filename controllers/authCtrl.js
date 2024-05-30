const { createUserService, loginService } = require("../services/authService");

const createUser = async (req, res) => {
  try {
    const { message, statusCode, success } = await createUserService(req.body);
    res.status(statusCode).json({ message, success });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { message, statusCode, success } = await loginService(req.body);
    res.status(statusCode).json({ message, success, statusCode });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  createUser,
};
