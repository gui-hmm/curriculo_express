"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;
require("dotenv/config");
var _Education = require("../modules/education/entities/Education");
var _Experience = require("../modules/experience/entities/Experience");
var _PersonalData = require("../modules/personalData/entities/PersonalData");
var _typeorm = require("typeorm");
const AppDataSource = exports.AppDataSource = new _typeorm.DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: [_Education.Education, _Experience.Experience, _PersonalData.PersonalData],
  //subscribers: [],
  migrations: ['./dist/database/migrations/*js']
});