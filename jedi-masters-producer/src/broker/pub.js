const connector = require('./connector').default;

export default class Publisher {

    constructor(exchange, exchangeType) {
      this.exchange = exchange;
      this.exchangeType = exchangeType;
      this.durabilityOptions = {
        durable: true,
        autoDelete: false,
      };
    }
  
    connect = () => {
        return connector.connect().then( (channel) => {
           console.log('Connecting..');
           return channel.assertExchange(
            this.exchange,
            this.exchangeType,
            this.durabilityOptions
          ).then (() => {  
              this.channel = channel;
              return Promise.resolve();
          }).catch( (err) => {
              console.error(err);
          });
        });
    }
  
    disconnect = () => {
        return this.channel.close().then( () => { return connector.close();});
    }
  
    publish = (msg) => {
        this.channel.publish(this.exchange, '', Buffer.from(msg));      
    }
  }

