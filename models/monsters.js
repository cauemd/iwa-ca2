//importing mongoose
var mongoose = require('mongoose');

//this might change, just initial concept for monster data
var monsterSchema = new mongoose.Schema({ 
    name: { type: String, unique: true, lowercase: false},
    type: { type: String, lowercase: true},
    size: String
});

module.exports = mongoose.model('monster', monsterSchema);