"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.educationRoutes = void 0;
var _CreateEducationController = require("../modules/education/useCases/createEducation/CreateEducationController");
var _DeleteEducationController = require("../modules/education/useCases/deleteEducation/DeleteEducationController");
var _FindByIdController = require("../modules/education/useCases/findById/FindByIdController");
var _ListEducationController = require("../modules/education/useCases/listEducation/ListEducationController");
var _UpdateEducationController = require("../modules/education/useCases/updateEducation/UpdateEducationController");
var _express = require("express");
const educationRoutes = exports.educationRoutes = (0, _express.Router)();
const createEducationController = new _CreateEducationController.CreateEducationController();
const listEducationController = new _ListEducationController.ListEducationController();
const findByIdController = new _FindByIdController.FindByIdController();
const deleteEducationController = new _DeleteEducationController.DeleteEducationController();
const updateEducationController = new _UpdateEducationController.UpdateEducationController();
educationRoutes.post('/', createEducationController.handle);
educationRoutes.get('/', listEducationController.handle);
educationRoutes.get('/:id', findByIdController.handle);
educationRoutes.delete('/:id', deleteEducationController.handle);
educationRoutes.put('/:id', updateEducationController.handle);