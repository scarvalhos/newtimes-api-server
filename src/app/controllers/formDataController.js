const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Form = require('../models/form');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const forms = await Form.find();

        return res.send({ forms });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading forms' });
    }
});

module.exports = app => app.use('/formdata', router);
