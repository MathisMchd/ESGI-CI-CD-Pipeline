

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,          // Email obligatoire
    unique: true,
    validate: {
      isEmail: true,           // Vérif email valide
    },
  },
});

module.exports = User;
