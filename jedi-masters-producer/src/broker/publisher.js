import Channel from './channel';

export default class Publisher {

    constructor() { }

  publish = (msg, queue) => {
      Channel(queue, (err, channel, conn) => {
          if (err) {
              console.error(err.stack);
          } else {
              console.log('msg %j', msg);
              channel.sendToQueue(queue, this.encode(msg), {
                  persistent: true
              });
              setImmediate(() => {
                  channel.close();
                  conn.close();
              });
          }
      });
  };

  encode = (doc) => {
      return new Buffer(JSON.stringify(doc));
  };
}
