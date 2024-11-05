// index.js

require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env
const express = require('express'); // Importa o Express
const mongoose = require('mongoose'); // Importa o Mongoose
const questRoutes = require('./routes/questsRoutes'); // Importa as rotas de quest
const app = express(); // Inicializa a aplicação Express

const PORT = process.env.PORT || 3000; // Define a porta do servidor

// Conecta ao banco de dados MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware para permitir o uso de JSON
app.use(express.json());

// Middleware para log de requisições (opcional)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Usar as rotas de quest
app.use('/api/quests', questRoutes);

// Rota de saúde
app.get('/', (req, res) => {
  res.send('Welcome to the Oracle of Azeroth!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
