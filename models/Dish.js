const db = require('../db');

class Dish {
    static getAll(callback) {
        db.query('SELECT * FROM dishes', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getById(id, callback) {
        db.query('SELECT * FROM dishes WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }
}

module.exports = Dish;
