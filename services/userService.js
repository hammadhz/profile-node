const Client = require("../models/Client");

const setProfileSerice = async (profileParams, fileParams, user) => {
  try {
    const { bio, isProfileSet } = profileParams;
    if (user._id) {
      await Client.findByIdAndUpdate(
        user._id,
        {
          bio,
          isProfileSet,
          profile: fileParams?.filename,
        },
        {
          new: true,
        }
      );
      return {
        message: "Profile Set Successfully",
        success: true,
      };
    }
  } catch (error) {
    return { message: error.errorResponse.errmsg, fail: true };
  }
};

module.exports = {
  setProfileSerice,
};
