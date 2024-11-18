"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteExperienceController = void 0;
var _tsyringe = require("tsyringe");
var _DeleteExperienceService = require("./DeleteExperienceService");
class DeleteExperienceController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const deleteExperienceService = _tsyringe.container.resolve(_DeleteExperienceService.DeleteExperienceService);
    await deleteExperienceService.execute(Number(id));
    res.status(204).send();
  }
}
exports.DeleteExperienceController = DeleteExperienceController;