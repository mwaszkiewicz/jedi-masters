import Channel from './channel';
import  db  from '../config/database';

const queue = 'queue';

function consumeMessage (){
Channel(queue, function(err, channel, conn) {  
  if (err) {
    console.error(err.stack);
  }
  else {
    console.log('channel and queue created');
    consume();
  }
  function consume() {
    channel.get(queue, {}, onConsume);
    function onConsume(err, msg) {
      if (err) {
        console.warn(err.message);
      }
      else if (msg) {
        const obj= JSON.parse(msg.content.toString())
        console.log('consuming %j',obj);
    db.Order.create({
      type: obj.type,
      name: obj.name,
      qunatity: obj.quantity
    })
        setTimeout(function() {
          channel.ack(msg);
          consume();
        }, 10000);
      }
      else {
        console.log('no message, waiting...');
        setTimeout(consume, 10000);
      }
    }
  }
});
};

export default consumeMessage;