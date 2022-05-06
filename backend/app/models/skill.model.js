var mongoose = require('mongoose');
var Schema = mongoose.Schema

var Skill_Schema = new Schema({
    skillTitle: String,
    skillValue: [String],    
});

module.exports = mongoose.model('Skill', Skill_Schema)