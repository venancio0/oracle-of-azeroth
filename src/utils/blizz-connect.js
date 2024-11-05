const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

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

module.exports = { getQuestsBlizz, getQuestByIdBlizz };
