const express = require('express');
const { Book, connectDB } = require('./db');
const app = express();
const PORT = 3001;

app.use(express.json());

const authorize = require('./auth');

app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Błąd serwera przy pobieraniu książek.' });
    }
});

app.get('/api/books/:bookId', async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findByPk(bookId);

        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).send({ message: `Książka o id ${bookId} nie znaleziona.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Błąd serwera przy pobieraniu książki.' });
    }
});

app.post('/api/books',authorize, async (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).send({ message: 'Brak wymaganych pól (title, author, year).' });
    }

    try {
        const newBook = await Book.create({ title, author, year });
        res.status(201).json({ id: newBook.id, message: 'Książka dodana pomyślnie.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Błąd serwera podczas dodawania książki.' });
    }
});

app.delete('/api/books/:bookId',authorize, async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const deletedRows = await Book.destroy({
            where: { id: bookId }
        });

        if (deletedRows > 0) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: `Książka o id ${bookId} nie znaleziona.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Błąd serwera podczas usuwania książki.' });
    }
});


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Serwis książek działa na porcie http://localhost:${PORT}`);
    });
});