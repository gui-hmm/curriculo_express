"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.experienceRoutes = void 0;
var _CreateExperienceController = require("../modules/experience/useCases/createExperience/CreateExperienceController");
var _DeleteExperienceController = require("../modules/experience/useCases/deleteExperience/DeleteExperienceController");
var _FindByIdController = require("../modules/experience/useCases/findById/FindByIdController");
var _ListExperienceController = require("../modules/experience/useCases/listExperience/ListExperienceController");
var _UpdateExperienceController = require("../modules/experience/useCases/updateExperience/UpdateExperienceController");
var _express = require("express");
const experienceRoutes = exports.experienceRoutes = (0, _express.Router)();
const createExperienceController = new _CreateExperienceController.CreateExperienceController();
const listExperienceController = new _ListExperienceController.ListExperienceController();
const findByIdController = new _FindByIdController.FindByIdController();
const deleteExperienceController = new _DeleteExperienceController.DeleteExperienceController();
const updateExperienceController = new _UpdateExperienceController.UpdateExperienceController();
experienceRoutes.post('/', createExperienceController.handle);
experienceRoutes.get('/', listExperienceController.handle);
experienceRoutes.get('/:id', findByIdController.handle);
experienceRoutes.put('/:id', updateExperienceController.handle);
experienceRoutes.delete('/:id', deleteExperienceController.handle);