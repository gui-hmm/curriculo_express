"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperienceRepository = void 0;
var _dataSource = require("../../../database/data-source");
var _Experience = require("../entities/Experience");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class ExperienceRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);
    this.repository = _dataSource.AppDataSource.getRepository(_Experience.Experience);
  }
  async create({
    title,
    description,
    company,
    position,
    location,
    start_date,
    end_date
  }) {
    const experience = await this.repository.create({
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date
    });
    await this.repository.save(experience);
    return experience;
  }
  async findById(id) {
    const experience = await this.repository.findOneBy({
      id
    });
    return experience;
  }
  async list() {
    const experiences = await this.repository.find();
    return experiences;
  }
  async delete(id) {
    await this.repository.delete({
      id
    });
  }
  async update(id, data) {
    const {
      title,
      description,
      company,
      location,
      position,
      start_date,
      end_date
    } = data;
    const experience = await this.repository.findOneBy({
      id
    });
    experience.title = title;
    experience.description = description;
    experience.company = company;
    experience.location = location;
    experience.position = position;
    experience.start_date = start_date;
    experience.end_date = end_date;
    await this.repository.save(experience);
  }
}
exports.ExperienceRepository = ExperienceRepository;