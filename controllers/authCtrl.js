const { createUserService, loginService } = require("../services/authService");

const createUser = async (req, res) => {
  try {
    const createSerRes = await createUserService(req.body);
    res.json(createSerRes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const loginSerRes = await loginService(req.body);
    res.json(loginSerRes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  login,
  createUser,
};
