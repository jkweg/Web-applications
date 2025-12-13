const express = require('express');
const axios = require('axios');
const { Order, connectDB } = require('./db');

const app = express();
const PORT = 3002;
const BOOKS_SERVICE_URL = 'http://localhost:3001/api/books'; 

app.use(express.json());

const authorize = require('./auth');


async function checkBookExists(bookId) {
    try {
        await axios.get(`${BOOKS_SERVICE_URL}/${bookId}`);
        return true;
    } catch (error) {
        return false;
    }
}


app.get('/api/orders/:userId', async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { userId: req.params.userId } });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send({ message: 'Server error.' });
    }
});

app.post('/api/orders', authorize, async (req, res) => {
    const { userId, bookId, quantity } = req.body;

    if (!userId || !bookId || !quantity || quantity <= 0) {
        return res.status(400).send({ message: 'Missing data.' });
    }

    const bookExists = await checkBookExists(bookId);

    if (!bookExists) {
        return res.status(404).send({ message: `Book ID ${bookId} not found in Service 1.` });
    }

    try {
        const newOrder = await Order.create({ userId, bookId, quantity });
        res.status(201).json({ id: newOrder.id, message: 'Order created.' });
    } catch (error) {
        res.status(500).send({ message: 'DB creation error.' });
    }
});

app.delete('/api/orders/:orderId', authorize, async (req, res) => {
    try {
        const deleted = await Order.destroy({ where: { id: req.params.orderId } });

        if (deleted > 0) {
            res.status(204).send(); 
        } else {
            res.status(404).send({ message: 'Order not found.' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Server error.' });
    }
});

app.patch('/api/orders/:orderId', authorize , async (req, res) => {
    const { quantity } = req.body;
    
    if (quantity === undefined || typeof quantity !== 'number' || quantity <= 0) {
        return res.status(400).send({ message: 'Invalid quantity.' });
    }

    try {
        const [updatedRows] = await Order.update(
            { quantity },
            { where: { id: req.params.orderId } }
        );

        if (updatedRows > 0) {
            const updatedOrder = await Order.findByPk(req.params.orderId);
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).send({ message: 'Order not found.' });
        }
    } catch (error) {
        res.status(500).send({ message: 'DB update error.' });
    }
});


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Service 2 (Orders) running on port ${PORT}`);
    });
});