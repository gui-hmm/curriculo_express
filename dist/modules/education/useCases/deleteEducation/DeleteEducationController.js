"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteEducationController = void 0;
var _tsyringe = require("tsyringe");
var _DeleteEducationService = require("./DeleteEducationService");
class DeleteEducationController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const deleteEducationService = _tsyringe.container.resolve(_DeleteEducationService.DeleteEducationService);
    await deleteEducationService.execute(Number(id));
    res.status(204).send();
  }
}
exports.DeleteEducationController = DeleteEducationController;