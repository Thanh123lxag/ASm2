const express = require('express');
const { auth } = require('../config/firebase');
const router = express.Router();

// User signup
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await auth.createUser({
            email,
            password,
        });
        res.status(201).json({ message: 'User created successfully', uid: user.uid });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// User login (token-based)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Firebase doesn't provide native login in admin SDK; you'll need Firebase Client SDK in the frontend.
        res.status(200).json({ message: 'Login handled by frontend' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Verify user token
router.post('/verify-token', async (req, res) => {
    const { token } = req.body;
    try {
        const decodedToken = await auth.verifyIdToken(token);
        res.status(200).json({ uid: decodedToken.uid });
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

module.exports = router;
