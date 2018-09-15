import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

const port = '3001';
const name = 'jedi-masters-consumer';

export default class Server {
  apiInstance = undefined;

  constructor() {
    this.initializeApi();
  }

  initializeApi = () => {
    this.apiInstance = express();
    this.apiInstance.use(bodyParser.text({type: 'text/html', limit: '1mb'}));
    this.apiInstance.use(bodyParser.urlencoded({ extended: true, limit: '1mb'}));
    this.apiInstance.use(bodyParser.json({ limit: '1mb'}));
    this.apiInstance.use(logger('dev'));
    console.info('Api setup done');
  };

  addApiRoute = (method, uri, cbs) => {
    const info = `Added route: [${method}] ${uri}`;
    this.apiInstance[method.toLowerCase()](uri, cbs);
    console.info(info);
  };

  createDocumentation = () => {
    console.info('Set swagger doc');
    var options = {
      explorer: true
    };
    this.apiInstance.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
  };

  start = () => {
    console.info('Starting server...');
    this.apiInstance.listen(port, (err, result) => {
      if (err) {
        console.error(`Unable to start ${ name } server:`, err);
      } else {
        console.info(`${ name } server is listening on ${port}`);
      }
    });
  };
};