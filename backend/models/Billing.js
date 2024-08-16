// models/Billing.js
const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    houseHolderName: { type: String, required: true },
    address: { type: String, required: true },
    contractorName: { type: String, required: true },
    items: [{
        type: { type: String, required: true },
        name: { type: String, required: true },
        size: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    totalQuantity: { type: Number, required: true }
});

module.exports = mongoose.model('Billing', billingSchema);
