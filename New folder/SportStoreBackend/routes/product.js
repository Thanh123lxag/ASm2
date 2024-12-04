const express = require('express');
const { db } = require('../config/firebase');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const productsSnapshot = await db.collection('products').get();
        const products = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new product
router.post('/', async (req, res) => {
    try {
        const newProduct = req.body;
        await db.collection('products').add(newProduct);
        res.status(201).json({ message: 'Product added successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
