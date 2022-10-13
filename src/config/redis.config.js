const config = require("./config")
module.exports = {
    port: config.redis_port,
    host: config.redis_host,
    family: 4,
    password: config.redis_password,
    db: 0,
    connectTimeout: 100000
}