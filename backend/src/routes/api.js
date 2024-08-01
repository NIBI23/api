const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Get all items
router.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Create a new item
router.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

module.exports = router;

