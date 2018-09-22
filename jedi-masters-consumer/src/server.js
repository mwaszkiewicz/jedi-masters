import Server from './server/index';
import Endpoint from './routes/index';
import consumeMessage from './broker/subscriber';

const endpoint = new Endpoint();
const server = new Server();

consumeMessage('add');
consumeMessage('update');

server.addApiRoute('GET', '/api/v1/orders', endpoint.getAll);
server.addApiRoute('GET', '/api/v1/orders:id', endpoint.getOneById);
server.createDocumentation();
server.start();

// todo konfiguracja es linta
// ES6
// docker
// consumowanie
// promisy
// migracje bazy danych
// async await
// config