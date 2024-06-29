const address = require("../models/clientAddressModel");

const addnewAddress = async (req, res) => {
  const { address } = req.body;
  const response = await fetch("www.google.com");
  const newAddress = new address({
    address,
    geoloaction: { lat, lng },
  });

  await newAddress.save();

  res.status(200).json({ message: "Address added successfully" });
};

const getAllAddress = async (req, res) => {
  const user_id = req.user._id;
  const address = await User.findOne({ _id: user_id });
};
module.exports = { addnewAddress, getAllAddress };
