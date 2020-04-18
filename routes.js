//getting dependencies
var express = require('express'),
    router = express.Router(),
    userCtrl = require('./monster-controller');

//creating HTTP paths for the API
router.post('/monsters', userCtrl.createUser);
router.get('/monsters', userCtrl.getUsers);
router.get('/monsters/:id', userCtrl.getUser);
router.delete('/monsters/:id', userCtrl.deleteUser);
router.put('/monsters/:id', userCtrl.updateUser);

module.exports = router;