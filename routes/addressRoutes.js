const express = require("express");

const {
  addnewAddress,
  getAllAddress,
} = require("../controller/clientAddressController");

const router = express.Router();

router.post("/addaddress", addnewAddress);

router.get("/alladdress", getAllAddress);
