"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindByIdController = void 0;
var _tsyringe = require("tsyringe");
var _FindByIdService = require("./FindByIdService");
class FindByIdController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const findByIdService = _tsyringe.container.resolve(_FindByIdService.FindByIdService);
    const experience = await findByIdService.execute(Number(id));
    res.status(200).json(experience);
  }
}
exports.FindByIdController = FindByIdController;