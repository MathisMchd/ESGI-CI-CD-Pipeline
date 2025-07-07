require('dotenv').config();
const sequelize = require('../../src/db/database');
const User = require('../../src/db/models/user');

async function seed() {
  try {
    console.log('Insertion des utilisateurs pour les tests...');
    await sequelize.sync({ force: true });

    await User.bulkCreate([
      { name: 'Toto', email: 'toto@example.com' },
      { name: 'Tata', email: 'tata@example.com' },
      { name: 'Titi', email: 'titi@example.com' },
    ]);

    console.log('Données insérées avec succès.');
    await sequelize.close();
  } catch (error) {
    console.error('Erreur lors de l’insertion des fixtures :', error.message);
    process.exit(1);
  }
}

seed();
