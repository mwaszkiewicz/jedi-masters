import  db  from '../models/index';

export default class Endpoint {

    constructor() {  }

    getAll = (req,res) => {
        db.Order.findAll({
            attributes: ['type', 'name','quantity'],
            order: [
                ['createdAt', 'DESC']
            ],
        })
            .then((orders) => res.status(200).send(orders))
            .catch((error) => res.status(400).send(error));
    };

    getOneById = (req,res) => {
        return db.Order.find({
            where: {
                id: req.params.id
            }
        })
            .then((order) => res.status(200).send(order))
            .catch((error) => res.status(400).send(error));
    };
}