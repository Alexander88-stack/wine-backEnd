const express = require('express');

const wineController = require('../controller/wine.controller.js');


const router = express.Router();


router.get('/', wineController.getWine);
router.post('/', wineController.addWine);
router.put('/:id', wineController.updateWine);
router.delete('/:id', wineController.dropWine);




module.exports = router; 