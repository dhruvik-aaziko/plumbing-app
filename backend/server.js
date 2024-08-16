// server.js
const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/Item');
const Billing = require('./models/Billing');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/plumbing', {
    
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// CRUD Routes for Items
app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.post('/api/items', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
});

app.put('/api/items/:id', async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
});

app.delete('/api/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
});

// Billing Route
app.post('/api/billing', async (req, res) => {
    const newBilling = new Billing(req.body);
    await newBilling.save();
    res.status(201).json(newBilling);
});

app.get('/api/billing', async (req, res) => {
    const bills = await Billing.find();
    res.json(bills);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
