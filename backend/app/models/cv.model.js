var mongoose = require('mongoose');
var Schema = mongoose.Schema

module.exports = mongoose => {
  var schema = mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: ' User' },
    jobTitle: String,
    fullName: String,
    phoneNumber: String,
    emailAdress: String,
    homeAdress: String,
    drivingLicence: String,
    education: [{ type: Schema.Types.ObjectId, ref: 'Education' }],
    skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
    previousJobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
    hobbies: [String],
    languages: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
    extracurricularCertifications: [{ type: Schema.Types.ObjectId, ref: 'Certification' }],
    preset: String,
    creationDate: Date,
    lastModifiedDate: Date
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const CV = mongoose.model("CV", schema);
  return CV;
};
