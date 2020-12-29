const express = require('express');
const mainController = require('../controller/main.controller');


const router = express.Router();

 

router.get('/', mainController.getClient);
router.post('/login', mainController.addClient);
router.put('/', mainController.updateClient);
router.delete('/delete', mainController.dropClient);



module.exports = router; 