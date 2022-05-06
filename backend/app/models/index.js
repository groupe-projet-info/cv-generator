const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;


// A MODIFIER

db.random_collection = require("./random_collection.model.js")(mongoose);




module.exports = db;