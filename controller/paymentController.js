
const QRCode = require('qrcode');
const Payment = require('../models/payment');
const { processPayment } = require('../payment/paymentMethod'); 

exports.generateQRCode = async (req, res) => {
    try {
      const amount = 20;
      const dummyPaymentInfo = `upi://pay?pa=dummymerchant@upi&pn=Dummy Merchant&am=${amount}&cu=INR`;
  
      const qrCodeData = await QRCode.toDataURL(dummyPaymentInfo);
  
      // You may choose not to save this dummy payment in your database
      // since it's just for testing purposes.
  
      res.json({ qrCodeData });
    } catch (error) {
      console.error('Error generating dummy QR code:', error);
      res.status(500).json({ error: 'Failed to generate dummy QR code' });
    }
  };

  exports.handlePayment = async(req, res) => {
    const { token } = req.body;

    if(!token) {
        return res.status(400).json({error: 'Token is required'});
    }
    try {
        const paymentResponse = await processPayment(token);
        //res.status(200).send({message:"Token recieved", response: paymentResponse});
        res.status(200).json({message:"Token recieved", response: paymentResponse})
    } catch (error) {
        res.status(500).json({error: 'Payment processing failed'})
    }
  }



