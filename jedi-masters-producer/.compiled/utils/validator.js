'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _joi = require('joi');var _joi2 = _interopRequireDefault(_joi);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var validationAdd = _joi2.default.object().keys({
    type: _joi2.default.string().insensitive().lowercase().valid('falcon', 'lightsaber').required(),
    name: _joi2.default.string().alphanum().min(1).max(30).required(),
    quantity: _joi2.default.number().integer().min(1).max(999).required() });


var validationUpdate = _joi2.default.object().keys({
    type: _joi2.default.string().insensitive().lowercase().valid('falcon', 'lightsaber').required(),
    name: _joi2.default.string().alphanum().min(1).max(30).required(),
    quantity: _joi2.default.number().integer().min(1).max(999).required() });exports.default =


{ validationAdd: validationAdd, validationUpdate: validationUpdate };
//# sourceMappingURL=validator.js.map