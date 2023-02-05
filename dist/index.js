"use strict";

var _app = _interopRequireDefault(require("./app"));
var _config = require("./config");
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(_config.PORT);
console.log("server on port", _config.PORT);