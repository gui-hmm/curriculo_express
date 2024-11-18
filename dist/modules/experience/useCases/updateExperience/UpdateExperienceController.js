"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateExperienceController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateExperienceService = require("./UpdateExperienceService");
class UpdateExperienceController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const {
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date
    } = req.body;
    const updateExperienceService = _tsyringe.container.resolve(_UpdateExperienceService.UpdateExperienceService);
    await updateExperienceService.execute(Number(id), {
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date
    });
    res.status(204).send();
  }
}
exports.UpdateExperienceController = UpdateExperienceController;