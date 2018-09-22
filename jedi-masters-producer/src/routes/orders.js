import validator from '../utils/validator';
import Publisher from '../broker/publisher';

const publisher = new Publisher();

const action = (req, res) => {
    validator.validate(req.body, { abortEarly: false })
        .then((validatedOrderPart) => {
            publisher.publish(validatedOrderPart, 'add');
            res.status(201).send('Sent');
        })
        .catch((validationError) => {
            const errorMessage = validationError.details.map((d) => {
return d.message;
});
            res.status(400).send(errorMessage);
        });
};

export default (req, res) => {
return action(req, res);
};
