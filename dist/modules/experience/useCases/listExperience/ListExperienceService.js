"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListExperienceService = void 0;
var _IExperienceRepository = require("../../repositories/interface/IExperienceRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let ListExperienceService = exports.ListExperienceService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ExperienceRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IExperienceRepository.IExperienceRepository === "undefined" ? Object : _IExperienceRepository.IExperienceRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListExperienceService {
  constructor(experienceRepository) {
    this.experienceRepository = experienceRepository;
  }
  async execute() {
    const experiences = await this.experienceRepository.list();
    return experiences;
  }
}) || _class) || _class) || _class) || _class);