const express = require('express');
const router = express.Router();
const questController = require('./../controllers/questController');

router.get('/', questController.getAllQuests); // Rota para buscar todas as quests

router.get('/:id', questController.getQuestById); // Rota para buscar uma quest por ID

module.exports = router;
