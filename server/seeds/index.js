const sequelize = require('../config/connection');
const { User, Recipes} = require('../models');
const userSeeds = require('./userSeeds.json');
const recipesSeeds = require('./recipesSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeeds);

  await Recipes.bulkCreate(recipesSeeds);

  console.log('Database Seeded!');

  process.exit(0);
};

seedDatabase();