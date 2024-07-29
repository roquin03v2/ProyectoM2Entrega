const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');

router.get('/', (req, res) => {
    Dish.getAll((err, dishes) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(dishes);
    });
});

router.get('/:id', (req, res) => {
    Dish.getById(req.params.id, (err, dish) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!dish) return res.status(404).json({ error: 'Plato No Encontrado' });
        res.json(dish);
    });
});

module.exports = router;
