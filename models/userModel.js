const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const randomString = require("randomstring");
const validator = require("validator");
const Client = require("./clientModel");
const { ClientEncryption } = require("mongodb");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  contactnumber: {
    type: String,
  },
});

userSchema.statics.signup = async function (
  name,
  email,
  password,
  confirmpassword,
  contactnumber
) {
  if (!email || !password) throw Error("Email or Password is Empty");

  if (!validator.isEmail(email)) throw Error("Email is not valid");

  // if (!validator.isNumeric(contactnumber))
  //   throw Error("Contact should contains only number");

  const exists = await this.findOne({ email });

  if (exists) throw Error("Email already in use");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // const role = "client";

  const user = await this.create({
    name,
    email,
    password: hash,
    confirmpassword,
    contactnumber,
  });

  const client = await new Client({
    client: user._id,
    name,
  });

  await client.save();

  await user.save();

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect username or password");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect username or password");
  }
  return user;
};

module.exports = model("User", userSchema);
