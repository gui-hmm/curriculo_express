"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateEducationTable1730594025502 = void 0;
var _typeorm = require("typeorm");
class CreateEducationTable1730594025502 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "educations",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "institution",
        type: "varchar"
      }, {
        name: "course",
        type: "varchar"
      }, {
        name: "degree",
        type: "varchar"
      }, {
        name: "period",
        type: "int"
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable("education");
  }
}
exports.CreateEducationTable1730594025502 = CreateEducationTable1730594025502;