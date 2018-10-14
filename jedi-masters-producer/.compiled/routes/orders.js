'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _validator = require('../utils/validator');var _validator2 = _interopRequireDefault(_validator);
var _publisher = require('../broker/publisher');var _publisher2 = _interopRequireDefault(_publisher);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var publisher = new _publisher2.default();

var action = function action(req, res) {
    _validator2.default.validationAdd(req.body, { abortEarly: false }).
    then(function (validatedOrderPart) {
        publisher.publish(validatedOrderPart, 'add');
        res.status(201).send('Sent');
    }).
    catch(function (validationError) {
        var errorMessage = validationError.details.map(function (d) {
            return d.message;
        });
        res.status(400).send(errorMessage);
    });
};exports.default =

function (req, res) {
    return action(req, res);
};
//# sourceMappingURL=orders.js.map