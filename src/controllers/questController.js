// controllers/questController.js

const blizzardConnector = require('../utils/blizz-connect'); // Serviço que chama a API da Blizzard

//Quests
exports.getAllQuests = async (req, res) => {
  try {
    const quests = await blizzardConnector.getQuestsBlizz(); // Chama a função que busca quests da Blizzard
    res.json(quests);
  } catch (error) {
    console.error('Error fetching quests from Blizzard API:', error); // Log do erro
    res.status(500).json({ error: 'Error fetching quests' });
  }
};

exports.getQuestById = async (req, res) => {
    const questId = req.params.id;
    try {
      const quest = await blizzardConnector.getQuestByIdBlizz(questId); // Chama a função que busca a quest da Blizzard
      if (quest) {
        res.json(quest); // Retorna a quest diretamente
      } else {
        res.status(404).json({ error: 'Quest not found' });
      }
    } catch (error) {
      console.error('Error fetching quest from Blizzard API:', error); // Log do erro
      res.status(500).json({ error: 'Error fetching quest' });
    }
};


//Quest Categories
exports.getQuestCategories = async (req, res) => {
    try {
      const categories = await blizzardConnector.getQuestCategoriesBlizz(); // Chama a função que busca categorias de quests da Blizzard
      res.json(categories);
    } catch (error) {
      console.error('Error fetching quest categories from Blizzard API:', error); // Log do erro
      res.status(500).json({ error: 'Error fetching quest categories' });
    }
};

exports.getQuestCategoriesById = async (req, res) => { 
    const categoryId = req.params.id;
    try {
      const category = await blizzardConnector.getQuestCategoriesByIdBlizz(categoryId); // Chama a função que busca a categoria de quests da Blizzard
      if (category) {
        res.json(category); // Retorna a categoria diretamente
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      console.error('Error fetching quest category from Blizzard API:', error); // Log do erro
      res.status(500).json({ error: 'Error fetching quest category' });
    }
};


//Quest Areas
exports.getQuestAreas = async (req, res) => {
    try {
      const areas = await blizzardConnector.getQuestAreasBlizz(); // Chama a função que busca as áreas de quests da Blizzard
      res.json(areas);
    } catch (error) {
      console.error('Error fetching quest areas from Blizzard API:', error); // Log do erro
      res.status(500).json({ error: 'Error fetching quest areas' });
    }
};

exports.getQuestAreasById = async (req, res) => {
    const areaId = req.params.id;
    try {
      const area = await blizzardConnector.getQuestAreasByIdBlizz(areaId); // Chama a função que busca a área de quests da Blizzard
      if (area) {
        res.json(area); // Retorna a área diretamente
      } else {
        res.status(404).json({ error: 'Area not found' });
      }
    } catch (error) {
      console.error('Error fetching quest area from Blizzard API:', error); // Log do erro
      res.status(500).json({ error: 'Error fetching quest area' });
    }
};


//Quest Types
exports.getQuestTypes = async (req, res) => {
    try {
      const types = await blizzardConnector.getQuestTypesBlizz(); // Chama a função que busca os tipos de quests da Blizzard
      res.json(types);
    } catch (error) {
      console.error('Error fetching quest types from Blizzard API:', error); // Log do erro
      res.status(500).json({ error: 'Error fetching quest types' });
    }
};

exports.getQuestTypesById = async (req, res) => {
    const typeId = req.params.id;
    try {
      const type = await blizzardConnector.getQuestTypesByIdBlizz(typeId); // Chama a função que busca o tipo de quests da Blizzard
      if (type) {
        res.json(type); // Retorna o tipo diretamente
      } else {
        res.status(404).json({ error: 'Type not found' });
      }
    } catch (error) {
      console.error('Error fetching quest type from Blizzard API:', error); // Log do erro
      res.status(500).json({ error: 'Error fetching quest type' });   
    }
};