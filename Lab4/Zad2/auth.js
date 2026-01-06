const jwt = require('jsonwebtoken');

const JWT_SECRET = 'szacun'; 

const authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Brak lub nieprawidłowy token autoryzacyjny (wymagany Bearer token).' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        req.userId = decoded.userId; 
        
        next(); 

    } catch (error) {
        
        return res.status(403).json({ message: 'Token autoryzacyjny jest nieprawidłowy lub wygasł.' });
    }
};

module.exports = authorize;