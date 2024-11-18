"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePersonalDataTable1730659517320 = void 0;
var _typeorm = require("typeorm");
class CreatePersonalDataTable1730659517320 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'personal_data',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'email',
        type: 'varchar',
        isUnique: true
      }, {
        name: 'phone',
        type: 'varchar'
      }, {
        name: 'address_street',
        type: 'varchar'
      }, {
        name: 'address_city',
        type: 'varchar'
      }, {
        name: 'address_state',
        type: 'varchar'
      }, {
        name: 'address_country',
        type: 'varchar'
      }, {
        name: 'address_number',
        type: 'varchar'
      }, {
        name: 'address_zip',
        type: 'varchar'
      }, {
        name: 'linkedin_link',
        type: 'varchar'
      }, {
        name: 'github_link',
        type: 'varchar'
      }, {
        name: 'about',
        type: 'varchar'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('personal_data');
  }
}
exports.CreatePersonalDataTable1730659517320 = CreatePersonalDataTable1730659517320;