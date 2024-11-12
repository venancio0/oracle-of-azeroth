const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

// Função para obter o token de acesso as APIs da Blizzard
async function getBlizzardToken() {
  const clientId = process.env.BLIZZARD_CLIENT_ID;
  const clientSecret = process.env.BLIZZARD_CLIENT_SECRET;
  const url = 'https://us.battle.net/oauth/token';
  
  const params = qs.stringify({
    grant_type: 'client_credentials'
  });

  const response = await axios.post(url, params, {
    auth: {
      username: clientId,
      password: clientSecret
    }
  });

  return response.data.access_token; // Retorna o token
}


// Funções para buscar quests, categorias, áreas e tipos de quests da Blizzard
async function getQuestsBlizz() {
  const token = await getBlizzardToken(); // Obtém o token
  const url = 'https://us.api.blizzard.com/data/wow/quest/index?namespace=static-us&locale=en_US';
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data; // Retorna os dados das quests
}

async function getQuestByIdBlizz(id) {
  const token = await getBlizzardToken(); // Obtém o token
  const url = `https://us.api.blizzard.com/data/wow/quest/${id}?namespace=static-us&locale=en_US`;
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data; // Retorna os dados da quest
}



async function getQuestCategoriesBlizz() {
  const token = await getBlizzardToken(); // Obtém o token
  const url = 'https://us.api.blizzard.com/data/wow/quest/category/index?namespace=static-us&locale=en_US';
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data; // Retorna os dados das categorias de quests
}

async function getQuestCategoriesByIdBlizz(id) {
  const token = await getBlizzardToken(); // Obtém o token
  const url = `https://us.api.blizzard.com/data/wow/quest/category/${id}?namespace=static-us&locale=en_US`;
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data; // Retorna os dados da categoria de quests
}



async function getQuestAreasBlizz() {
  const token = await getBlizzardToken(); // Obtém o token
  const url = 'https://us.api.blizzard.com/data/wow/quest/area/index?namespace=static-us&locale=en_US';
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data; // Retorna os dados das áreas de quests
}

async function getQuestAreasByIdBlizz(id) {
  const token = await getBlizzardToken(); // Obtém o token
  const url = `https://us.api.blizzard.com/data/wow/quest/area/${id}?namespace=static-us&locale=en_US`;
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data; // Retorna os dados da área de quests
}




async function getQuestTypesBlizz() {
  const token = await getBlizzardToken(); // Obtém o token
  const url = 'https://us.api.blizzard.com/data/wow/quest/type/index?namespace=static-us&locale=en_US';
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data; // Retorna os dados dos tipos de quests
} 

async function getQuestTypesByIdBlizz(id) {
  const token = await getBlizzardToken(); // Obtém o token
  const url = `https://us.api.blizzard.com/data/wow/quest/type/${id}?namespace=static-us&locale=en_US`;
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data; // Retorna os dados do tipo de quests
}

module.exports = { getQuestsBlizz, getQuestByIdBlizz, getQuestCategoriesBlizz, getQuestCategoriesByIdBlizz , getQuestAreasBlizz, getQuestAreasByIdBlizz, getQuestTypesBlizz, getQuestTypesByIdBlizz };
