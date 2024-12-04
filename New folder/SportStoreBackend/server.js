const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const productRoutes = require('./routes/product'); // Import product routes

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api/products', productRoutes); // Route for product APIs

// Default route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

const orderRoutes = require('./routes/order');
app.use('/api/orders', orderRoutes);
