"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdatePersonalDataController = void 0;
var _tsyringe = require("tsyringe");
var _UpdatePersonalDataService = require("./UpdatePersonalDataService");
class UpdatePersonalDataController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const data = req.body;
    const updatePersonalDataService = _tsyringe.container.resolve(_UpdatePersonalDataService.UpdatePersonalDataService);
    updatePersonalDataService.execute(Number(id), data);
    res.status(204).send();
  }
}
exports.UpdatePersonalDataController = UpdatePersonalDataController;