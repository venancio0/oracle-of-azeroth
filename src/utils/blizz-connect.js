const axios = require('axios');

async function getBlizzardToken() {
  const { data } = await axios.post('https://us.battle.net/oauth/token', null, {
    auth: {
      username: process.env.BLIZZARD_CLIENT_ID,
      password: process.env.BLIZZARD_CLIENT_SECRET
    },
    params: { grant_type: 'client_credentials' }
  });
  return data.access_token;
}
