"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../controllers/task.controller");
var router = (0, _express.Router)();
router.get("/", _task.renderConfig);
router.get('/home', _task.goToHome);
router.post("/task/add", _task.createTask);
router.get("/edit/:id", _task.editTask);
router.post("/edit/:id", _task.endeditTask);
router.get("/delete/:id", _task.deleteTask);
router.get("/togle/:id", _task.togleTask);
router.get("/men", _task.renderMen);
router.get("/women", _task.renderWomen);
router.get("/about", _task.about);
var _default = router;
exports["default"] = _default;