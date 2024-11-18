"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personalDataRoutes = void 0;
var _CreatePersonalDataController = require("../modules/personalData/useCases/createPersonalData/CreatePersonalDataController");
var _DeletePersonalDataController = require("../modules/personalData/useCases/deletePersonalData/DeletePersonalDataController");
var _FindByIdController = require("../modules/personalData/useCases/findById/FindByIdController");
var _ListPersonalDataController = require("../modules/personalData/useCases/listPersonalData/ListPersonalDataController");
var _UpdatePersonalDataController = require("../modules/personalData/useCases/updatePersonalData/UpdatePersonalDataController");
var _express = require("express");
const personalDataRoutes = exports.personalDataRoutes = (0, _express.Router)();
const createPersonalDataController = new _CreatePersonalDataController.CreatePersonalDataController();
const updatePersonalDataController = new _UpdatePersonalDataController.UpdatePersonalDataController();
const findByIdController = new _FindByIdController.FindByIdController();
const listPersonalDataController = new _ListPersonalDataController.ListPersonalDataController();
const deletePersonalDataController = new _DeletePersonalDataController.DeletePersonalDataController();
personalDataRoutes.post('/', createPersonalDataController.handle);
personalDataRoutes.put('/:id', updatePersonalDataController.handle);
personalDataRoutes.get('/', listPersonalDataController.handle);
personalDataRoutes.get('/:id', findByIdController.handle);
personalDataRoutes.delete('/:id', deletePersonalDataController.handle);