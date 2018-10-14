'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _morgan = require('morgan');var _morgan2 = _interopRequireDefault(_morgan);
var _swaggerUiExpress = require('swagger-ui-express');var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);
var _swagger = require('../../swagger.json');var _swagger2 = _interopRequireDefault(_swagger);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

var port = '3002';
var name = 'jedi-masters-producer';var

Server =


function Server() {var _this = this;_classCallCheck(this, Server);this.apiInstance = undefined;this.



    initializeApi = function () {
        _this.apiInstance = (0, _express2.default)();
        _this.apiInstance.use(_bodyParser2.default.text({
            type: 'text/html',
            limit: '1mb' }));

        _this.apiInstance.use(_bodyParser2.default.urlencoded({
            extended: true,
            limit: '1mb' }));

        _this.apiInstance.use(_bodyParser2.default.json({
            limit: '1mb' }));

        _this.apiInstance.use((0, _morgan2.default)('dev'));
        console.info('Api setup done');
    };this.

    addApiRoute = function (method, uri, cbs) {
        var info = 'Added route: [' + method + '] ' + uri;
        _this.apiInstance[method.toLowerCase()](uri, cbs);
        console.info(info);
    };this.

    createDocumentation = function () {
        console.info('Set swagger doc');
        var options = {
            explorer: true };

        _this.apiInstance.use('/api-docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, options));
    };this.

    start = function () {
        console.info('Starting server...');
        _this.apiInstance.listen(port, function (err, result) {
            if (err) {
                console.error('Unable to start ' + name + ' server:', err);
            } else {
                console.info(name + ' server is listening on ' + port);
            }
        });
    };this.initializeApi();};exports.default = Server;
//# sourceMappingURL=index.js.map