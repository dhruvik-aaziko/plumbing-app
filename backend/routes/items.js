// backend/routes/items.js
const express = require('express');
const router = express.Router();

router.get('/items', async (req, res) => {
  try {
    // Fetch items from the database
    res.json(items); // Example response
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
