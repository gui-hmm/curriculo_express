"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePersonalDataController = void 0;
var _tsyringe = require("tsyringe");
var _CreatePersonalDataService = require("./CreatePersonalDataService");
class CreatePersonalDataController {
  async handle(req, res) {
    const data = req.body;
    const createPersonalDataService = _tsyringe.container.resolve(_CreatePersonalDataService.CreatePersonalDataService);
    const personalData = await createPersonalDataService.execute(data);
    res.status(201).json(personalData);
  }
}
exports.CreatePersonalDataController = CreatePersonalDataController;