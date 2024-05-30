const { setProfileSerice } = require("../services/userService");

const setProfileCtrl = async (req, res) => {
  try {
    const setProfileSerRes = await setProfileSerice(
      req.body,
      req.file,
      req.user
    );
    res.status(200).json(setProfileSerRes);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  setProfileCtrl,
};
