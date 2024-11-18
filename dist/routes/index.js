"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _express = require("express");
var _education = require("./education.routes");
var _experience = require("./experience.routes");
var _personalData = require("./personalData.routes");
const routes = exports.routes = (0, _express.Router)();
routes.use('/api/education', _education.educationRoutes);
routes.use('/api/experience', _experience.experienceRoutes);
routes.use('/api/personalData', _personalData.personalDataRoutes);