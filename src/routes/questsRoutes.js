const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/quests', async (req, res) => {
  try {
    const token = await getBlizzardToken();
    const response = await axios.get('https://us.api.blizzard.com/data/wow/quest/index', {
      headers: { Authorization: `Bearer ${token}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching quests' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
