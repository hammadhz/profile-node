const Client = require("../models/Client");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/genToken");
const { validateLogin, validateRegister } = require("../utils/validations");

const createUserService = async (registerParam) => {
  try {
    const { firstName, lastName, email, mobile, password } = registerParam;
    const { error } = validateRegister(registerParam);
    if (error) {
      return { message: error.details[0].message, fail: true };
    }
    const findUser = await Client.find({ email: email });
    if (findUser.lenght > 0) {
      throw new Error("User Already Exits!");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const client = new Client({
        firstName,
        lastName,
        email,
        mobile,
        password: hashedPassword,
      });
      await client.save();
      return { message: "User Register Successfully", success: true };
    }
  } catch (error) {
    return { message: error, fail: true };
  }
};

const loginService = async (loginParam) => {
  try {
    const { error } = validateLogin(loginParam);
    if (error) {
      return { message: error.details[0].message, fail: true };
    }
    const { email, password } = loginParam;
    const findUser = await Client.findOne({ email: email });
    console.log(findUser);
    if (findUser) {
      const isPasswordMatch = await bcrypt.compare(password, findUser.password);
      if (isPasswordMatch) {
        const generatedToken = await generateToken(
          findUser._id,
          findUser.firstName,
          findUser.lastName,
          findUser.email
        );
        return {
          message: "Login Successfully",
          success: true,
          token: generatedToken,
          isProfileSet: findUser.isProfileSet,
        };
      } else {
        return { message: "Invalid Credentails", fail: true };
      }
    } else {
      return { message: "User Not Exists!", fail: true };
    }
  } catch (error) {
    return { message: error, fail: true };
  }
};

module.exports = {
  createUserService,
  loginService,
};
