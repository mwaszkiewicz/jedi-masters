import Server from './server/index';
import Endpoint from './routes/index';
import consumeMessage from './broker/subscriber';

const endpoint = new Endpoint();
const server = new Server();

consumeMessage('add');
consumeMessage('update');

server.addApiRoute('GET', '/api/v1/orders', endpoint.getAll);
server.addApiRoute('GET', '/api/v1/orders:id', endpoint.getAll);
server.createDocumentation();
server.start();
