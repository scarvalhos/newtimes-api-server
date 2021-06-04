const mongoose = require('../../database');

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
    },

    service: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;
