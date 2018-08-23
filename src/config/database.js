import Sequelize from 'sequelize';
import OrderModel from '../models/order';
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Order = OrderModel(sequelize, Sequelize);

export default {
  Order
}