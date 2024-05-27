const jwt = require("jsonwebtoken");

const generateToken = async (id, firstName, lastName, email) => {
  const token = jwt.sign(
    { id, firstName, lastName, email },
    process.env.SECRET_JWT,
    {
      expiresIn: "1h",
    }
  );

  return token;
};

module.exports = { generateToken };
