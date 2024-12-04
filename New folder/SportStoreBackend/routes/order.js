const express = require('express');
const { db } = require('../config/firebase');
const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
    const { userId, products, totalAmount } = req.body;
    try {
        const newOrder = {
            userId,
            products,
            totalAmount,
            status: 'Pending',
            createdAt: new Date().toISOString(),
        };
        const orderRef = await db.collection('orders').add(newOrder);
        res.status(201).json({ message: 'Order created', orderId: orderRef.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all orders for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const ordersSnapshot = await db.collection('orders').where('userId', '==', userId).get();
        const orders = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
