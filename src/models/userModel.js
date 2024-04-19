const db = require('../services/db');

const userModel = {
    findAll: async () => {
        const sql = 'SELECT * FROM users';
        try {
            const results = await db.query(sql);
            return results;
        } catch (err) {
            throw err;
        }
    },

    findById: async (id) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        try {
            const results = await db.query(sql, [id]);
            return results[0];
        } catch (err) {
            throw err;
        }
    },

    create: async (userData) => {
        const sql = 'INSERT INTO users SET ?';
        try {
            const result = await db.query(sql, userData);
            return { id: result.insertId, ...userData };
        } catch (err) {
            throw err;
        }
    },

    update: async (id, userData) => {
        const sql = 'UPDATE users SET ? WHERE id = ?';
        try {
            const result = await db.query(sql, [userData, id]);
            return { id, ...userData };
        } catch (err) {
            throw err;
        }
    },

    delete: async (id) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        try {
            await db.query(sql, [id]);
            return { message: "User deleted successfully" };
        } catch (err) {
            throw err;
        }
    }
};

module.exports = userModel;
