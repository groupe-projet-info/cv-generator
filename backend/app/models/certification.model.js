module.exports = mongoose => {
    var schema = mongoose.Schema({
      cv: { type: Schema.Types.ObjectId, ref:'CV'},
      authority: String,
      certificationName: String,
      certificationPassYear: Number
});
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Certification = mongoose.model("certification", schema);
    return Certification;
  };
  