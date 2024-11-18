"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateExperienceTable1730654549554 = void 0;
var _typeorm = require("typeorm");
class CreateExperienceTable1730654549554 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'experiences',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'title',
        type: 'varchar'
      }, {
        name: 'description',
        type: 'varchar'
      }, {
        name: 'company',
        type: 'varchar'
      }, {
        name: 'position',
        type: 'varchar'
      }, {
        name: 'location',
        type: 'varchar'
      }, {
        name: 'start_date',
        type: 'timestamp'
      }, {
        name: 'end_date',
        type: 'timestamp',
        isNullable: true
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('experiences');
  }
}
exports.CreateExperienceTable1730654549554 = CreateExperienceTable1730654549554;