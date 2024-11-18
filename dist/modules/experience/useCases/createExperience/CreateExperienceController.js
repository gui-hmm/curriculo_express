"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateExperienceController = void 0;
var _tsyringe = require("tsyringe");
var _CreateExperienceService = require("./CreateExperienceService");
class CreateExperienceController {
  async handle(req, res) {
    const {
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date
    } = req.body;
    const createExperienceService = _tsyringe.container.resolve(_CreateExperienceService.CreateExperienceService);
    const experience = await createExperienceService.execute({
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date
    });
    res.status(201).json(experience);
  }
}
exports.CreateExperienceController = CreateExperienceController;