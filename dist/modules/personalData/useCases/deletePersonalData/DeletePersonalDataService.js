"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeletePersonalDataService = void 0;
var _IPersonalDataRepository = require("../../repositories/interface/IPersonalDataRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let DeletePersonalDataService = exports.DeletePersonalDataService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('PersonalDataRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IPersonalDataRepository.IPersonalDataRepository === "undefined" ? Object : _IPersonalDataRepository.IPersonalDataRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeletePersonalDataService {
  constructor(personalDataRepository) {
    this.personalDataRepository = personalDataRepository;
  }
  async execute(id) {
    await this.personalDataRepository.delete(id);
  }
}) || _class) || _class) || _class) || _class);