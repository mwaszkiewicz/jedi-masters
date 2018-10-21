import Publisher from '../broker/publisher';

const publisher = new Publisher();
publisher.init();

const action = (req, res, schema) => {
    schema.validate(req.body, { abortEarly: false })
        .then((validatedReq) => {
            try {
                publisher.publishAsync(validatedReq);
                res.status(201).send('Ok');
            }catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        })
        .catch((validationError) => {
            console.log(validationError);
            const errorMessage = validationError.details.map((d) => {
                return d.message;
            });
            res.status(400).send(errorMessage);
        });
};

export default (req, res, validate) => {
    return action(req, res, validate);
};
