require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const mealRoutes = require('./routes/mealRoutes');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/meals', mealRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
