module.exports = mongoose => {
    var schema = mongoose.Schema({
      cv: { type: Schema.Types.ObjectId, ref:'CV'},
      skillTitle: String,
      skillValue: [String]
});
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Skill = mongoose.model("skill", schema);
    return Skill;
  };
  