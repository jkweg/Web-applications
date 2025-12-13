const express = require('express');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const { User, connectDB } = require('./db');

const app = express();
const PORT = 3003;

const JWT_SECRET = 'szacun'; 

app.use(express.json());


app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Email i hasło są wymagane.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({ id: newUser.id, message: 'Rejestracja pomyślna.' });

    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeUniqueConstraintError') {
             return res.status(409).send({ message: 'Użytkownik z tym adresem email już istnieje.' });
        }
        res.status(500).send({ message: 'Błąd serwera podczas rejestracji.' });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Email i hasło są wymagane.' });
    }

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).send({ message: 'Błędny email lub hasło.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send({ message: 'Błędny email lub hasło.' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email }, 
            JWT_SECRET,                            
            { expiresIn: '1h' }                     
        );

       res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Błąd serwera podczas logowania.' });
    }
});


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Serwis Użytkowników działa na porcie http://localhost:${PORT}`);
    });
});