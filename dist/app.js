"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressHandlebars = require("express-handlebars");
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.set("views", _path["default"].join(__dirname, "views"));

//Motor de plantilla
var exphbs = (0, _expressHandlebars.create)({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs"
});
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//Middleware
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));

//Routes
app.use(_index["default"]);
var _default = app;
exports["default"] = _default;