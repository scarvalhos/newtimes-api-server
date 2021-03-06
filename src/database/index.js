const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.Promise = global.Promise;

module.exports = mongoose;
