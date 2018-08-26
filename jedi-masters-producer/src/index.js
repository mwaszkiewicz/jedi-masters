import express from 'express';
import bodyParser from 'body-parser';
import validator from './utils/validator';
import logger from 'morgan';
import sendMessage from './broker/publisher';

const app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/v1/orders', (req, res) => {
     validator.validate(req.body, {abortEarly: false})
        .then(validatedOrderPart => {
            sendMessage(validatedOrderPart);
            res.status(201).send("Sent");
        })
        .catch(validationError => {
            const errorMessage = validationError.details.map(d => d.message);
            res.status(400).send(errorMessage);
        });
}
);

app.listen(3002, () => console.log('Jedi Masters Producer app listening on port 3002!'))