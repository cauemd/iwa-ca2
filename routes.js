//getting dependencies
var express = require('express'),
    router = express.Router(),
    monsterCtrl = require('./monster-controller.js');

//creating HTTP paths for the API
router.post('/monsters', monsterCtrl.createMonster);
router.get('/monsters', monsterCtrl.getMonsters);
router.get('/monsters/:id', monsterCtrl.getMonster);
router.delete('/monsters/:id', monsterCtrl.deleteMonster);
router.put('/monsters/:id', monsterCtrl.updateMonster);

module.exports = router;