const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  Meal.associate = (models) => {
    Meal.belongsTo(models.User);
  };

  return Meal;
};
