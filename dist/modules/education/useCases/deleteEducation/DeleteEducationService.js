"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteEducationService = void 0;
var _IEducationRepository = require("../../repositories/interface/IEducationRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let DeleteEducationService = exports.DeleteEducationService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('EducationRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IEducationRepository.IEducationRepository === "undefined" ? Object : _IEducationRepository.IEducationRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteEducationService {
  constructor(educationRepository) {
    this.educationRepository = educationRepository;
  }
  async execute(id) {
    await this.educationRepository.delete(id);
  }
}) || _class) || _class) || _class) || _class);