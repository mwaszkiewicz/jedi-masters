import validator from '../utils/validator';
import sendMessage from '../broker/publisher';

const action = (req, res) => {
     validator.validate(req.body, {abortEarly: false})
        .then(validatedOrderPart => {
            sendMessage(validatedOrderPart);
            res.status(201).send("Sent");
        })
        .catch(validationError => {
            const errorMessage = validationError.details.map(d => d.message);
            res.status(400).send(errorMessage);
        });
};

export default (req, res)=> action(req, res);