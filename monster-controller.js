var Monster = require("./models/monsters.js")

exports.createMonster = function(req, res) { 
    var newMonster = new Monster(req.body);
    newMonster.save(function (err, user) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(user); 
});
};

exports.getMonsters = function(req, res) {
   Monster.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

exports.getMonster = function(req, res) {
  Monster.findOne({_id: req.params.name}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

exports.updateMonster = function(req, res) {
  Monster.findOneAndUpdate({_id: req.params.name}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

exports.deleteMonster = function(req, res) {
  Monster.findByIdAndRemove(req.params.name, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};