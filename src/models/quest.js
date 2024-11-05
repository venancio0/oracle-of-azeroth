const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  nextQuestId: Number, // ID da próxima quest na sequência
  zone: String,
  expansion: String,
});

const Quest = mongoose.model('Quest', questSchema);
