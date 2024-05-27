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
      type: String,
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
  },
  {
    timestamps: true,
  }
);

const clientModel = model("Client", ClientSchema);

module.exports = clientModel;
