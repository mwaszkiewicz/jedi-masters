import RabbitConnector from './connector';

export default class Publisher {

    constructor() {
        this._connector = new RabbitConnector();
        this._connector.connect();
    }

  publish = (msg, queue) => {
      if (this._connector !== undefined) {
          let r = this._connector.publish(msg, queue);
          console.log(r);
        //.then(() => {
        //       console.log('ok');
        //   }).catch((err) => {
        //       console.log(err);
        //   });
      }
  };
}
