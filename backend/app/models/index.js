const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.certifications = require("./certification.model.js")(mongoose);
db.cvs = require("./cv.model.js")(mongoose);
db.educations = require("./education.model.js")(mongoose);
db.jobs = require("./job.model.js")(mongoose);
db.languages = require("./language.model.js")(mongoose);
db.skills = require("./skill.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);

module.exports = db;