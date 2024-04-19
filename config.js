const config = {
    db: {
        /* don't expose password or any sensitive info, use environment variable */
        host: "localhost",
        user: "restapitest123",
        password: "restapitest123",
        database: "restapitest123",
        connectTimeout: 60000
    },
    listPerPage: 10,
};
module.exports = config;