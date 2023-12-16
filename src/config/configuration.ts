export default () => ({
    app: {
        host: process.env.HOST || 'localhost',
        port: parseInt(process.env.PORT as string, 10) || 3000
    },
    db: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT as string, 10) || 3306,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
});
