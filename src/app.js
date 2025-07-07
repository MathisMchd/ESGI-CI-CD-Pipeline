const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db/database');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Montre toutes les routes à la racine (pas de /users)
app.use('/', userRoutes);

// Connexion à la DB et démarrage serveur
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
});
