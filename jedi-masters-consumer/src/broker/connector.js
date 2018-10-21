const url = process.env.AMQP_URL || 'amqp://guest:guest@localhost:5672';
const exchange = process.env.AMQP_EXCHANGE || 'jedi';
const exchangeType = process.env.AMQP_EXCHANGE_TYPE || 'direct';

const rabbit = require('amqplib');

export default class RabbitConnector {

    _connection = undefined;
    constructor() {
        this.rabbitMQUrl = url;
    }

  connect = () => {
      return rabbit.connect(this.rabbitMQUrl)
          .then((conn) => {
              console.log('Connecting..');
              return conn.createConfirmChannel();
          }).then((connection) => {
              this._connection = connection;
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

  async connectAsync (){
      try {
          const conn = await rabbit.connect(this.rabbitMQUrl);
          this._connection = await conn.createChannel();
          await this._connection.assertExchange(exchange, exchangeType);
      }catch (error) {
          console.log(error);
      }
      console.log('Async Connected..');
  }

publish = (msg) => {
    this._connection.publish(this.exchange, '', this.encode(msg));
}

publish = (msg, queue) => {
    this._connection.sendToQueue(queue, this.encode(msg));
    return this._connection.waitForConfirms();
}

async publishAsync (msg) {
    await this._connection.publish(this.exchange, '', this.encode(msg));
}

  disconnect = () => {
      return this._connection.close().then( () => {
          return rabbit.close();
      });
  }

  encode = (doc) => {
      return new Buffer(JSON.stringify(doc));
  };
}
