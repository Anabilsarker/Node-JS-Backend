const userModel = {
    findAll: 'SELECT * FROM users',
    findById: 'SELECT * FROM users WHERE id = ?',
    create: 'INSERT INTO users SET ?',
    update: 'UPDATE users SET ? WHERE id = ?',
    delete: 'DELETE FROM users WHERE id = ?'
};

module.exports = userModel;
