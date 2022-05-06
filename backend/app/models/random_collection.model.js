module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "random_collection",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
    return Tutorial;
  };