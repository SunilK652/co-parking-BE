const express = require('express');
const router = express.Router();
const { addOwner, getOwners } = require("../controller/ownerController");


router.post('/addOwner', addOwner);


router.get('/getParking', getOwners);

module.exports = router;
