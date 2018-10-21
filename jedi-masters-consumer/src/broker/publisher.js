import RabbitConnector from './connector';

export default class Publisher {
    constructor() {
        this._connector = new RabbitConnector();
    }

    async init (){
        await this._connector.connectAsync();
    }

  publish = (msg, queue) => {
      return new Promise((resolve, reject) => {
          try {
              let result = this._connector.publish(msg, queue);
              console.log(result);
              resolve(result);
          }catch (error) {
              console.log(error);
              reject(error);
          }
      });
  }

  async publishAsync (msg, queue){
      try {
          await this._connector.publishAsync(msg, queue);
      }catch (error) {
          console.log(error);
      }
  }
}
