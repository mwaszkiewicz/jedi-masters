import RabbitConnector from './connector';

export default class Publisher {
    constructor() {
        this._connector = new RabbitConnector();
        this._connector.connect();
    }

  publish = (msg, queue) => {
      return new Promise((resolve, reject) => {
          try {
              this._connector.publish(msg, queue);
              resolve();
          }catch (error) {
              console.log(error);
              reject(error);
          }
      });
  }
}
