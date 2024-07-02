const axios = require('axios');

const processPayment = async (token) => {
  const url = 'https://api.sandbox.checkout.com/payments';
  const data = {
    source: {
      type: 'token',
      token: token,
    },
    '3ds': {
      enabled: true,
    },
    amount: 20,
    currency: 'INR',
    processing_channel_id: 'pc_nsih4f64gtruppm6446hgr2syq',
    reference: 'ORD-5023-4E89',
    metadata: {
      orderId: 'TEST123',
    },
    success_url: 'http://localhost:3000/confirmation',
    failure_url: 'http://localhost:3000/payment',
  };

  const headers = {
    'Authorization': 'Bearer sk_sbox_bp5bxl5io2f4hcfigrme2ccpeit',
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(url, data, { headers })
    console.log('response---->', response?.data);
    response.status(200).send(response.data)
  } catch (error) {
    response.status(500).send({
        result:"FAILED",
        details:"Payment Failed:" + error.message 
    })
    console.error('Payment request failed:', error);
    throw error;
  }
};

module.exports = { processPayment };
