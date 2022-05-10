module.exports = mongoose => {
    var schema = mongoose.Schema({
        userName: String,
        password: String,
        creationDate: Date,
        lastActiveDate: Date
});
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("user", schema);
    return User;
  };
  