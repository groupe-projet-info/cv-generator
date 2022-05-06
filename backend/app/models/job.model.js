var mongoose = require('mongoose');
var Schema = mongoose.Schema

var Job_Schema = new Schema({
    jobTitle: String,
    companyName: String,
    jobDescription: String,
    jobShortDescription: String,
    jobTechnicalKeywords: [String],
    startYear: Number,
    hasEnded: Boolean,
    endYear: Number,
    missions: [String],    
});

module.exports = mongoose.model('Job', Job_Schema)