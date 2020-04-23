//getting dependencies
var express = require('express'),
    router = express.Router(),
    monsterCtrl = require('./monster-controller.js');

//creating HTTP paths for the API
router.post('/monsters', monsterCtrl.createMonster);
router.get('/monsters', monsterCtrl.getMonsters);
router.get('/monsters/:name', monsterCtrl.getMonster);
router.delete('/monsters/:name', monsterCtrl.deleteMonster);
router.put('/monsters/:name', monsterCtrl.updateMonster);

module.exports = router;