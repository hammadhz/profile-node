const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ClientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isProfileSet: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const clientModel = model("Client", ClientSchema);

module.exports = clientModel;
