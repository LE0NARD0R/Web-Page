"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var task = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false
  },
  male: {
    type: Boolean,
    "default": false
  },
  female: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Task", task);
exports["default"] = _default;