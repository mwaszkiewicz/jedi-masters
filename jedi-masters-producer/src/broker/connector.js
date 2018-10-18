const url = process.env.AMQP_URL || 'amqp://guest:guest@localhost:5672';
const exchange = process.env.AMQP_EXCHANGE || 'jedi';
const exchangeType = process.env.AMQP_EXCHANGE_TYPE || 'direct';

const rabbit = require('amqplib');

export default class RabbitConnector {

    connection = undefined;

    constructor() {
        this.rabbitMQUrl = url;
    }

  connect = () => {
      return rabbit.connect(this.rabbitMQUrl)
          .then((conn) => {
              console.log('Connecting..');
              return conn.createConfirmChannel();
          }).then((connection) => {
              this.connection = connection;
              return connection.assertExchange(
                  exchange,
                  exchangeType
              ).then(() => {
                  console.log('Connected..');
              }).catch( (err) => {
                  console.error(err);
              });
          }).catch( (err) => {
              console.error(err);
          });
  };

  disconnect = () => {
      return this.connection.close().then( () => {
          return rabbit.close();
      });
  }

  publish = (msg) => {
      this.connection.publish(this.exchange, '', this.encode(msg));
  }

  publish = (msg, queue) => {
      this.connection.sendToQueue(queue, this.encode(msg));
      return connection.waitForConfirms();
  };

  encode = (doc) => {
      return new Buffer(JSON.stringify(doc));
  };
}
