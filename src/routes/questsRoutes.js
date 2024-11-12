const express = require('express');
const router = express.Router();
const questController = require('./../controllers/questController');

// Quests
router.get('/index', questController.getAllQuests); // Rota para buscar todas as quests
router.get('/:id', questController.getQuestById); // Rota para buscar uma quest por ID

//Quests category
router.get('/category/index', questController.getQuestCategories); // Rota para buscar as categorias de quests
router.get('/category/:id', questController.getQuestCategoriesById); // Rota para buscar uma categoria de quest por ID

//Quest areas
router.get('/area/index', questController.getQuestAreas); // Rota para buscar as áreas de quests
router.get('/area/:id', questController.getQuestAreasById); // Rota para buscar uma área de quest por ID

//Quest types
router.get('/type/index', questController.getQuestTypes); // Rota para buscar os tipos de quests
router.get('/type/:id', questController.getQuestTypesById); // Rota para buscar um tipo de quest por ID

module.exports = router;
