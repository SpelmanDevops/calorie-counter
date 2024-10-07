const { Meal, User } = require('../models');

const logMeal = async (req, res) => {
  try {
    const { name, calories, date } = req.body;
    const meal = await Meal.create({
      name,
      calories,
      date,
      UserId: req.user.id, // User authenticated
    });
    res.json(meal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMeals = async (req, res) => {
  try {
    const meals = await Meal.findAll({
      where: { UserId: req.user.id },
    });
    res.json(meals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { logMeal, getMeals };
