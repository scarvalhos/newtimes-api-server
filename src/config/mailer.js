require('dotenv/config');

module.exports = {
    mailer: {
        "host": process.env.MAILER_HOST,
        "port": process.env.MAILER_PORT,
        "user": process.env.MAILER_USER,
        "pass": process.env.MAILER_PASS
    }    
}
