const { Sequelize , DataTypes} = require('sequelize')

const sequelize = new Sequelize({dialect: 'sqlite' , storage:'orders.sqlite'});

const Order = sequelize.define('Order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    bookId: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
}, {
    tableName: 'orders',
    timestamps: true 
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('DB (Orders) OK');
    } catch (error) {
        console.error('DB Error:', error);
    }
};

module.exports = { Order, connectDB };