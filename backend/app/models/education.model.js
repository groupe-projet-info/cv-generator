var mongoose = require('mongoose');
var Schema = mongoose.Schema

module.exports = mongoose => {
    var schema = mongoose.Schema({
      cv: { type: Schema.Types.ObjectId, ref:'CV'},
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
  
    const Education = mongoose.model("Education", schema);
    return Education;
  };
  