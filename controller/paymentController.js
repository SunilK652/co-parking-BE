
const QRCode = require('qrcode');
const Payment = require('../models/payment');
const { processPayment } = require('../payment/paymentMethod'); 
const Owner = require('../models/owner');

exports.generateQRCode = async (req, res) => {
    try {
      const amount = 20;
      const dummyPaymentInfo = `upi://pay?pa=dummymerchant@upi&pn=Dummy Merchant&am=${amount}&cu=INR`;
  
      const qrCodeData = await QRCode.toDataURL(dummyPaymentInfo);
  
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

  exports.confirmPayment = async (req, res) => {
    try {
      const { paymentConfirmed } = req.body;
      const userId = req.user._id;
  
      if (paymentConfirmed) {
        await Owner.updateMany({ userId }, { parkingStatus: 'booked' });
      }
  
      res.status(200).json({ message: 'Payment confirmed successfully', paymentConfirmed });
    } catch (error) {
      console.error('Error confirming payment:', error);
      res.status(500).json({ message: 'Failed to confirm payment', error });
    }
  };



