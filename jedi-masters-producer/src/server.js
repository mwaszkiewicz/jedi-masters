import Server from './server/index';
import add from './routes/order-add';
import update from './routes/order-update';

const server = new Server();

server.addApiRoute('POST', '/api/v1/orders', add);
server.addApiRoute('PUT', '/api/v1/orders', update);
//erver.addApiRoute('DELETE', '/api/v1/orders', delete);
server.createDocumentation();
server.start();
