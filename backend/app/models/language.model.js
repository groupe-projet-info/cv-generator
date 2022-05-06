var mongoose = require('mongoose');
var Schema = mongoose.Schema

var Language_Schema = new Schema({
    languageName: String,
    level: String,   
});

module.exports = mongoose.model('Language', Language_Schema)