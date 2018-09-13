import Server from './server/index';
import orders from './routes/orders';

const server = new Server();

server.addApiRoute('POST', '/api/v1/orders', orders);
server.createDocumentation();
server.start();
