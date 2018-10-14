import Joi from 'joi';

const schemaUpdate = Joi.object().keys({
    type: Joi.string().insensitive().lowercase().valid('falcon', 'lightsaber').required(),
    name: Joi.string().alphanum().min(1).max(30).required(),
    quantity: Joi.number().integer().min(1).max(999).required()
});

export default schemaUpdate;
