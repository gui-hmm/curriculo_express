"use strict";

require("reflect-metadata");
require("dotenv/config");
require("./shared/container");
var _cors = _interopRequireDefault(require("cors"));
var _dataSource = require("./database/data-source");
var _express = _interopRequireDefault(require("express"));
var _index = require("./routes/index");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_index.routes);
const PORT = process.env.PORT || 8080;
_dataSource.AppDataSource.initialize().then(async () => {
  console.log("DATABASE OK!!");
  app.listen(PORT, () => console.log(`System running in port ${PORT}`));
});