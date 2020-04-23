var Monster = require("./models/monsters.js")

//creating a new monster in the database
exports.createMonster = function(req, res) { 
    var newMonster = new Monster(req.body);
    newMonster.save(function (err, user) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(user); 
});
};

//getting the data of all monsters in the database
exports.getMonsters = function(req, res) {
   Monster.find({}, function (err, monsters) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(monsters);
  }); 
};

//getting the data of a single monster in the database
exports.getMonster = function(req, res) {
  Monster.findOne({_id: req.params.name}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

//Updating the data of on monster in the database
exports.updateMonster = function(req, res) {
  Monster.findOneAndUpdate({name: req.body.name}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

//deleting a monster from the database
exports.deleteMonster = function(req, res) {
    //console.log(typeof(req.params.name));
    Monster.findOneAndRemove({name:req.params.name}, function (err, user) {
        if (err) {
            res.status(400).json(err);
        } 
        res.json(user);
    }); 
};