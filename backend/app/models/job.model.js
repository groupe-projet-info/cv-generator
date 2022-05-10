module.exports = mongoose => {
    var schema = mongoose.Schema({
      cv: { type: Schema.Types.ObjectId, ref:'CV'},
      jobTitle: String,
      companyName: String,
      jobDescription: String,
      jobShortDescription: String,
      jobTechnicalKeywords: [String],
      startYear: Number,
      hasEnded: Boolean,
      endYear: Number,
      missions: [String]
});
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Job = mongoose.model("job", schema);
    return Job;
  };
  