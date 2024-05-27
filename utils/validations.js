const Joi = require("joi");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Joi schema for register parameters
const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().regex(emailRegex).required(),
  mobile: Joi.number().required().min(11), // You might want to add validation specific to mobile numbers
  password: Joi.string().required().min(6).max(12), // You might want to add more password constraints
});

// Joi schema for login parameters
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Validate register parameters
const validateRegister = (registerParam) => {
  return registerSchema.validate(registerParam);
};

// Validate login parameters
const validateLogin = (loginParam) => {
  return loginSchema.validate(loginParam);
};

module.exports = {
  validateLogin,
  validateRegister,
};
