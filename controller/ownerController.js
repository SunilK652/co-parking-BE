const Owner = require('../models/owner');

const addOwner = async (req, res) => {
    try {
        const { name, address, phoneNumber, spotName, pinCode, landMark, segment,city, state, price, fromDate, toDate } = req.body;
        const newOwner = new Owner({ name, address, phoneNumber, spotName, pinCode, landMark, segment, city, state, price, fromDate, toDate });
        await newOwner.save();
        res.status(200).send({ message: 'Parking added successfully', status: 200, owner: newOwner });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getOwners = async (req, res) => {
    try {
        const owners = await Owner.find();
        res.status(200).send(owners);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    addOwner,
    getOwners
};
