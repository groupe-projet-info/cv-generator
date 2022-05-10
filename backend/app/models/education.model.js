module.exports = mongoose => {
    var schema = mongoose.Schema({
        location: String,
        title: String,
        startYear: Number,
        hasEnded: Boolean,
        endYear: Number,
        comments: String
});
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Education = mongoose.model("education", schema);
    return Education;
  };
  