'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _channel = require('./channel');var _channel2 = _interopRequireDefault(_channel);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Publisher =

function Publisher() {var _this = this;_classCallCheck(this, Publisher);this.

    publish = function (msg, queue) {
        (0, _channel2.default)(queue, function (err, channel, conn) {
            if (err) {
                console.error(err.stack);
            } else {
                console.log('msg %j', msg);
                channel.sendToQueue(queue, _this.encode(msg), {
                    persistent: true });

                setImmediate(function () {
                    channel.close();
                    conn.close();
                });
            }
        });
    };this.

    encode = function (doc) {
        return new Buffer(JSON.stringify(doc));
    };};exports.default = Publisher;
//# sourceMappingURL=publisher.js.map