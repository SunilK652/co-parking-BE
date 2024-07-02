
const express = require('express');
const router = express.Router();
const paymentController = require('../controller/paymentController');


router.get('/qr-code', paymentController.generateQRCode);
router.post('/check-out', paymentController.handlePayment);

module.exports = router;
