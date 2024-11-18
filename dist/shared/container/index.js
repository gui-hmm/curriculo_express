"use strict";

var _tsyringe = require("tsyringe");
var _EducationRepository = require("../../modules/education/repositories/EducationRepository");
var _ExperienceRepository = require("../../modules/experience/repositories/ExperienceRepository");
var _PersonalDataRepository = require("../../modules/personalData/repositories/PersonalDataRepository");
_tsyringe.container.registerSingleton('EducationRepository', _EducationRepository.EducationRepository);
_tsyringe.container.registerSingleton('ExperienceRepository', _ExperienceRepository.ExperienceRepository);
_tsyringe.container.registerSingleton('PersonalDataRepository', _PersonalDataRepository.PersonalDataRepository);