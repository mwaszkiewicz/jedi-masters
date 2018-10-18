import Publisher from '../broker/publisher';

const publisher = new Publisher();

const action = (req, res, schema, queue) => {
    schema.validate(req.body, { abortEarly: false })
        .then((validatedReq) => {
            publisher.publish(validatedReq, queue)
                .then((msg) => {
                    console.log(msg);
                    res.status(201).send(msg);
                    console.log(res);
                })
                .catch((err) => {
                    res.status(400).send(err);
                });
        })
        .catch((validationError) => {
            console.log(validationError);
            const errorMessage = validationError.details.map((d) => {
                return d.message;
            });
            res.status(400).send(errorMessage);
        });
};

export default (req, res, validate, queue) => {
    return action(req, res, validate, queue);
};
