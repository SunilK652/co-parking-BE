const express = require('express');
const router = express.Router();
const { addOwner, getOwners } = require("../controller/ownerController");
const requireAuth = require('../middleware/requiredAuth');

router.post('/addOwner', requireAuth, addOwner);


router.get('/getParking', requireAuth, getOwners);

module.exports = router;
