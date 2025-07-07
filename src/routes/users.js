const express = require('express');
const router = express.Router();
const User = require('../db/models/user');

// Formulaire du user (GET /form)
router.get('/form', (req, res) => {
  res.send(`
    <h1>Formulaire utilisateur</h1>
    <form action="/submit" method="POST">
      <label>Nom : <input type="text" name="name" required></label><br>
      <label>Email : <input type="email" name="email" required></label><br>
      <button type="submit">Envoyer</button>
    </form>
  `);
});

// Envoi du form pour save (POST /submit)
router.post('/submit', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.send(`<p> Utilisateur créé avec succès ! : Utilisateur : ${user.name} (${user.email}) <a href="/">Voir la liste entière</a></p>`);
  } catch (error) {
    res.status(400).send('Erreur lors de la création de l\'utilisateur : ' + error.message);
  }
});

// Liste des utilisateurs (GET /)
router.get('/', async (req, res) => {
  const users = await User.findAll();
  let html = '<h1>Liste des utilisateurs </h1><ul>';
  users.forEach((user, i) => {
    html += `<li>${i + 1}. ${user.name} - ${user.email}</li>`;
  });
  html += '</ul><a href="/form">Ajouter un utilisateur</a>';
  res.send(html);
});



router.get('/submissions', async (req, res) => {
  const users = await User.findAll();
  let html = '<h1>Liste des utilisateurs </h1><ul>';
  users.forEach((user, i) => {
    html += `<li>${i + 1}. ${user.name} - ${user.email}</li>`;
  });
  html += '</ul><a href="/form">Ajouter un utilisateur</a>';
  res.send(html);
});
module.exports = router;
