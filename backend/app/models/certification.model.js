var mongoose = require('mongoose');
var Schema = mongoose.Schema

var Certification_Schema = new Schema({
    authority: String,
    certificationName: String,
    certificationPassYear: Number,  
});

module.exports = mongoose.model('Certification', Certification_Schema)