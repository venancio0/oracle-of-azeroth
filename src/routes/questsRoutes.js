const express = require('express');
const router = express.Router();
const questController = require('./../controllers/questController');

// Quests
router.get('/', questController.getAllQuests); // Rota para buscar todas as quests
router.get('/:id', questController.getQuestById); // Rota para buscar uma quest por ID

//Categorias de quests
router.get('/categories', questController.getQuestCategories); // Rota para buscar as categorias de quests
router.get('/categories/:id', questController.getQuestCategoriesById); // Rota para buscar uma categoria de quest por ID

module.exports = router;
