const url = process.env.AMQP_URL || 'amqp://guest:guest@localhost:5672';
const rabbit = require('amqplib');

export default class RabbitConnector {

    _connection = undefined;

    constructor() {
        this.rabbitMQUrl = url;
    }

  connect = () => {
      return rabbit.connect(this.rabbitMQUrl)
          .then((conn) => {
              return conn.createChannel();
          }).then((_connection) => {
              console.log('Connected');
          }).catch(console.warn);
  };

  publish = (msg, queue) => {
      if (this._connection !== undefined) {
          this._connection.sendToQueue(queue, this.encode(msg));
      }
  };

  encode = (doc) => {
      return new Buffer(JSON.stringify(doc));
  };
}
