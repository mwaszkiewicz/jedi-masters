var Channel = require('./channel');
var queue = 'queue';
import  db  from '../config/database';

module.exports = consumeMessage;
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
       // console.log('consuming %j', msg.content.toString());
      //  var j = JSON.stringify(msg.content.toString());
      //  console.log(j);
        var obj= JSON.parse(msg.content.toString())
        console.log('consuming %j',obj);
        const type = obj.type;
        const name = obj.name;
        const quantity = obj.quantity;
        console.log('bubu %j',type);
    db.Order.create({
      type: type,
      name: name,
      qunatity: quantity
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