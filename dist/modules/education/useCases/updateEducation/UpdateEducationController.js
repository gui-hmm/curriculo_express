"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateEducationController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateEducationService = require("./UpdateEducationService");
class UpdateEducationController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const {
      institution,
      course,
      degree,
      period
    } = req.body;
    const updateEducationService = _tsyringe.container.resolve(_UpdateEducationService.UpdateEducationService);
    await updateEducationService.execute(Number(id), {
      institution,
      course,
      degree,
      period
    });
    res.status(204).send();
  }
}
exports.UpdateEducationController = UpdateEducationController;