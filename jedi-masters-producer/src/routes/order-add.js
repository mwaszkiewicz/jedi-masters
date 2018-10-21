import schema from '../utils/addSchema';
import action from './action';

export default (req, res) => {
    return action(req, res, schema);
};
