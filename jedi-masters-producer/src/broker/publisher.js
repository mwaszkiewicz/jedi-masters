import RabbitConnector from './connector';

export default class Publisher {

    constructor() {
        this._connector = new RabbitConnector();
    }

  publish = (msg, queue) => {
      if (this._connector !== undefined) {
          this._connector.publish(msg, queue);
      }
  };
}
