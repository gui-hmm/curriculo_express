"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonalDataRepository = void 0;
var _PersonalData = require("../entities/PersonalData");
var _dataSource = require("../../../database/data-source");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class PersonalDataRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);
    this.repository = _dataSource.AppDataSource.getRepository(_PersonalData.PersonalData);
  }
  async create(data) {
    const personalData = await this.repository.create(data);
    await this.repository.save(personalData);
    return personalData;
  }
  async findById(id) {
    const personalData = await this.repository.findOneBy({
      id
    });
    return personalData;
  }
  async list() {
    const personalDatas = await this.repository.find();
    return personalDatas;
  }
  async delete(id) {
    await this.repository.delete({
      id
    });
  }
  async update(id, data) {
    const personalData = await this.repository.findOneBy({
      id
    });
    personalData.name = data.name;
    personalData.email = data.email;
    personalData.phone = data.phone;
    personalData.address_street = data.address_street;
    personalData.address_number = data.address_number;
    personalData.address_city = data.address_city;
    personalData.address_country = data.address_country;
    personalData.address_state = data.address_state;
    personalData.address_zip = data.address_zip;
    personalData.github_link = data.github_link;
    personalData.linkedin_link = data.linkedin_link;
    personalData.about = data.about;
    await this.repository.save(personalData);
  }
}
exports.PersonalDataRepository = PersonalDataRepository;