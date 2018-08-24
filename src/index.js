import express from 'express';
import logger from 'morgan';
import routes from './routes/index';
import { json, urlencoded } from 'body-parser';
import consumeMessage from './broker/subscriber';

const app = express()

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/', routes);

consumeMessage();

app.listen(3001, () => {
    console.log('Jedi Masters Consumer app listening on port 3001!')
});