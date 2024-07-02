const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    spotName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    landMark: {
        type:String,
        required: false
    },
    segment: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;