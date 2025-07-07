require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mariadb',
    logging: false,
  }
);

async function testConnection() {
  try {
    console.log('environnement :', process.env.DB_NAME, process.env.DB_USER, process.env.DB_HOST, process.env.DB_PORT);
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie');
    await sequelize.close();
  } catch (error) {
    console.error('Échec de la connexion à la base de données :', error.message);
    process.exit(1);
  }
}

testConnection();
