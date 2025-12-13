const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'books.sqlite'
});

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'books',
    timestamps: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Połączenie z bazą danych ustanowione pomyślnie.');
        await sequelize.sync();
        console.log('Tabele zsynchronizowane.');
    } catch (error) {
        console.error('Błąd połączenia z bazą danych:', error);
    }
};

module.exports = {
    sequelize,
    Book,
    connectDB
};