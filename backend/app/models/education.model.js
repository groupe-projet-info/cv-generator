var mongoose = require('mongoose');
var Schema = mongoose.Schema

var Education_Schema = new Schema({
    location: String,
    title: String,
    startYear: Number,
    hasEnded: Boolean,
    endYear: Number,
    comments: String,
});

module.exports = mongoose.model('Education', Education_Schema)
