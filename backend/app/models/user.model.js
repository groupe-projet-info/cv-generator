var mongoose = require('mongoose');
var Schema = mongoose.Schema

var User_Schema = new Schema({
    userName: String,
    password: String,
    creationDate: Date,
    lastActiveDate: Date,  
});

module.exports = mongoose.model('User', User_Schema)