"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeletePersonalDataController = void 0;
var _tsyringe = require("tsyringe");
var _DeletePersonalDataService = require("./DeletePersonalDataService");
class DeletePersonalDataController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const deletePersonalDataService = _tsyringe.container.resolve(_DeletePersonalDataService.DeletePersonalDataService);
    await deletePersonalDataService.execute(Number(id));
    res.status(204).send();
  }
}
exports.DeletePersonalDataController = DeletePersonalDataController;