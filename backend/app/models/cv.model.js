var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CV_Schema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref:' User'}],
    jobTitle: String,
    education: [{ type: Schema.Types.ObjectId, ref:'Education'}],
    skills: [{ type: Schema.Types.ObjectId, ref:'Skill'}],
    previousJobs: [{ type: Schema.Types.ObjectId, ref:'Job'}],
    hobbies: [String],
    languages: [{ type: Schema.Types.ObjectId, ref:'Languages'}],
    extracurricularCertifications: [{ type: Schema.Types.ObjectId, ref:'Certification'}],
    preset: String,
    creationDate: Date,
    lastModifiedDate: Date,
});


module.exports = mongoose.model('CV', CV_Schema);