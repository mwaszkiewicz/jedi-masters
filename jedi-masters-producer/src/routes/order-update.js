import action from './action';
import schema from '../utils/updateSchema';

export default (req, res) => {
    return action(req, res, schema);
};
