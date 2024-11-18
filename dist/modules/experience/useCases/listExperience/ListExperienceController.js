"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListExperienceController = void 0;
var _tsyringe = require("tsyringe");
var _ListExperienceService = require("./ListExperienceService");
class ListExperienceController {
  async handle(req, res) {
    const listExperienceService = _tsyringe.container.resolve(_ListExperienceService.ListExperienceService);
    const experiences = await listExperienceService.execute();
    res.status(200).json(experiences);
  }
}
exports.ListExperienceController = ListExperienceController;