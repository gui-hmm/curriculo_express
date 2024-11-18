"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListEducationController = void 0;
var _tsyringe = require("tsyringe");
var _ListEducationService = require("./ListEducationService");
class ListEducationController {
  async handle(req, res) {
    const listEducationService = _tsyringe.container.resolve(_ListEducationService.ListEducationService);
    const educations = await listEducationService.execute();
    res.status(200).json(educations);
  }
}
exports.ListEducationController = ListEducationController;