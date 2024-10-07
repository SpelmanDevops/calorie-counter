const express = require('express');
const { logMeal, getMeals } = require('../controllers/mealController');
const router = express.Router();

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Failed to authenticate' });
    req.user = decoded;
    next();
  });
};

router.post('/log', authenticate, logMeal);
router.get('/meals', authenticate, getMeals);

module.exports = router;
