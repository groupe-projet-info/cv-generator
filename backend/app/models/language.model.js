var mongoose = require('mongoose');
var Schema = mongoose.Schema

module.exports = mongoose => {
    var schema = mongoose.Schema({
      cv: { type: Schema.Types.ObjectId, ref:'CV'},
      languageName: String,
      level: String
});
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Language = mongoose.model("Language", schema);
    return Language;
  };
  