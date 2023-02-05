"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.DB = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var DB = process.env.DBURL;
exports.DB = DB;
var PORT = process.env.PORT;
exports.PORT = PORT;