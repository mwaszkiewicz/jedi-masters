import { connect } from 'amqplib/callback_api';
const url = process.env.AMQP_URL || 'amqp://guest:guest@localhost:5672';

function createQueueChannel(queue, cb) {  
  connect(url, onceConnected);
  function onceConnected(err, conn) {  
    if (err) {
      console.error('Error connecting:', err.stack);
    }
    else {
      console.log('connected');
      conn.createChannel(onceChannelCreated);
    }
    function onceChannelCreated(err, channel) {  
        if (err) {
          cb(err);
        }
        else {
          channel.assertQueue(queue, {durable: true}, onceQueueCreated);
        }
        function onceQueueCreated(err) {
          if (err) {
            cb(err);
          }
          else {
            cb(null, channel, conn);
          }
        }
      }
  }
}

export default createQueueChannel;