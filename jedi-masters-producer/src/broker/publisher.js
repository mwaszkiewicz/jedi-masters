import Channel from './channel';
const queue = 'queue';

function sendMessage (msg){
    Channel(queue, function(err, channel, conn) {  
        if (err) {
        console.error(err.stack);
        }
        else {
          console.log('msg %j',msg);
            channel.sendToQueue(queue, encode(msg), {
            persistent: true
         });
    setImmediate(function() {
      channel.close();
      conn.close();
    });
  }
});
}

function encode(doc) {  
    return new Buffer(JSON.stringify(doc));
  }

  export default sendMessage;