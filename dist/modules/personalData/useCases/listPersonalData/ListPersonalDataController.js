"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListPersonalDataController = void 0;
var _tsyringe = require("tsyringe");
var _ListPersonalDataService = require("./ListPersonalDataService");
class ListPersonalDataController {
  async handle(req, res) {
    const listPersonalDataService = _tsyringe.container.resolve(_ListPersonalDataService.ListPersonalDataService);
    const personalDatas = await listPersonalDataService.execute();
    res.status(200).json(personalDatas);
  }
}
exports.ListPersonalDataController = ListPersonalDataController;