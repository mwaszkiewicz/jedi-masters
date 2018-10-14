'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _publisher = require('../broker/publisher');var _publisher2 = _interopRequireDefault(_publisher);
var _validator = require('../utils/validator');var _validator2 = _interopRequireDefault(_validator);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var publisher = new _publisher2.default();

var action = function action(req, res, queue) {
    _validator2.default.validationAdd(req.body, { abortEarly: false }).
    then(function (validatedReq) {
        publisher.publish(validatedReq, queue).
        then(function (res) {res.status(201).send('Sent');}).
        catch(function (err) {res.status(400).send(err);});
    }).
    catch(function (validationError) {
        // const errorMessage = validationError.details.map((d) => {
        //     return d.message;
        // });
        res.status(400).send(validationError);
    });
};exports.default =

function (req, res, validate, queue) {
    return action(req, res, validate, queue);
};
//# sourceMappingURL=router.js.map