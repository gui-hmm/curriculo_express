"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateEducationController = void 0;
var _tsyringe = require("tsyringe");
var _CreateEducationService = require("./CreateEducationService");
class CreateEducationController {
  async handle(req, res) {
    const {
      institution,
      course,
      degree,
      period
    } = req.body;
    const createEducationService = _tsyringe.container.resolve(_CreateEducationService.CreateEducationService);
    const education = await createEducationService.execute({
      institution,
      course,
      degree,
      period
    });
    res.status(201).json(education);
  }
}
exports.CreateEducationController = CreateEducationController;