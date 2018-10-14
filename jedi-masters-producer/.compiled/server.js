'use strict';var _index = require('./server/index');var _index2 = _interopRequireDefault(_index);
var _orders = require('./routes/orders');var _orders2 = _interopRequireDefault(_orders);
var _order = require('./routes/order');var _order2 = _interopRequireDefault(_order);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var server = new _index2.default();

server.addApiRoute('POST', '/api/v1/orders', _orders2.default);
server.addApiRoute('PUT', '/api/v1/orders', _order2.default.update);
server.createDocumentation();
server.start();
//# sourceMappingURL=server.js.map