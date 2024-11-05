// controllers/questController.js

const blizzardConnector = require('../utils/blizz-connect'); // Serviço que chama a API da Blizzard

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
  
