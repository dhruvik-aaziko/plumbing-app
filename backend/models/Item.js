// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    size: { type: String, required: true },
    photo: { type: String, required: true }
});

module.exports = mongoose.model('Item', itemSchema);
