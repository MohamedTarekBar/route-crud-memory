const dotenv = require('dotenv');
dotenv.config();

const {PORT, NODE_ENV} = process.env;

module.exports = {
    port: PORT,
    env: NODE_ENV,
};
