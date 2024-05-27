const { setProfileSerice } = require("../services/userService");

const setProfileCtrl = async (req, res) => {
  try {
    const setProfileSerRes = await setProfileSerice(
      req.body,
      req.file,
      req.user
    );
    res.json(setProfileSerRes);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  setProfileCtrl,
};
