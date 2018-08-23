export default (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  });
  return Order;
};