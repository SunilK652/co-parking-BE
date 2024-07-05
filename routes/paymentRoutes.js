
const express = require('express');
const router = express.Router();
const paymentController = require('../controller/paymentController');
const requireAuth = require('../middleware/requiredAuth');


router.get('/qr-code', paymentController.generateQRCode);
router.post('/check-out', paymentController.handlePayment);
router.post('/payment-confirmation', requireAuth, paymentController.confirmPayment);


module.exports = router;
