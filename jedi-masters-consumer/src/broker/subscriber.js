import Channel from './channel';
import  db  from '../config/database';

function consumeMessage (queue){
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
                    const obj= JSON.parse(msg.content.toString());
                    console.log('consuming %j',obj);

                    if (queue == 'add'){
                        db.Order.create({
                            type: obj.type,
                            name: obj.name,
                            quantity: obj.quantity
                        });}
                    else if (queue == 'update'){
                        db.Order.update({  
                            type: obj.type,
                            name: obj.name,
                            quantity: obj.quantity},
                        {_id : 1}).success(function() { 
                            console.log('Order updated successfully!');
                        }).error(function(err) { 
                            console.log('Order update failed !');
                        });
                    }

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
}

export default consumeMessage;