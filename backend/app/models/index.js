const mongoose = require("mongoose");
require('dotenv').config();
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_URL;

db.certifications = require("./certification.model.js")(mongoose);
db.cvs = require("./cv.model.js")(mongoose);
db.educations = require("./education.model.js")(mongoose);
db.jobs = require("./job.model.js")(mongoose);
db.languages = require("./language.model.js")(mongoose);
db.skills = require("./skill.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);

module.exports = db;