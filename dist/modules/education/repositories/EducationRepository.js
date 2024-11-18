"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EducationRepository = void 0;
var _Education = require("../entities/Education");
var _dataSource = require("../../../database/data-source");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class EducationRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);
    this.repository = _dataSource.AppDataSource.getRepository(_Education.Education);
  }
  async create({
    institution,
    course,
    degree,
    period
  }) {
    const education = await this.repository.create({
      institution,
      course,
      degree,
      period
    });
    await this.repository.save(education);
    return education;
  }
  async findById(id) {
    const education = await this.repository.findOneBy({
      id
    });
    return education;
  }
  async list() {
    const educations = await this.repository.find();
    return educations;
  }
  async delete(id) {
    await this.repository.delete({
      id
    });
  }
  async update(id, data) {
    const {
      institution,
      course,
      degree,
      period
    } = data;
    const education = await this.repository.findOneBy({
      id
    });
    education.institution = institution;
    education.course = course;
    education.degree = degree;
    education.period = period;
    await this.repository.save(education);
  }
}
exports.EducationRepository = EducationRepository;