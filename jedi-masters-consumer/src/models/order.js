'use strict';
export default (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        quantity: DataTypes.INTEGER
    }, {});
    Order.associate = function() {
    // associations can be defined here
    };
    return Order;
};