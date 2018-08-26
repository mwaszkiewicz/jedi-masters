import { Router } from 'express';
import  db  from '../config/database';

const router  = Router();

router.get('/api/v1/orders', (req,res)=> {
      db.Order.findAll({
            attributes: ['type', 'name','quantity'],
            order: [
                ['createdAt', 'DESC']
            ],
        })
        .then((orders) => res.status(200).send(orders))
        .catch((error) => res.status(400).send(error));
});

export default router;