const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const randomString = require("randomstring");
const validator = require("validator");
const { ClientEncryption } = require("mongodb");

const dashboard = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  cartype: {
    type: String,
  },
  contactnumber: {
    type: String,
  },
});

module.exports = model("dashboard", dashboard);
