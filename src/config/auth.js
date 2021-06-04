require('dotenv/config');

module.exports = {
    secret: {
        "secret": process.env.AUTH_SECRET,
    }    
}
