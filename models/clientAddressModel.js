const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const randomString = require("randomstring");
const validator = require("validator");
const { ClientEncryption } = require("mongodb");

const addressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  address: {
    type: String,
  },
  geoloaction: {
    lat: Number,
    lng: Number,
  },
});

module.exports = model("address", addressSchema);
