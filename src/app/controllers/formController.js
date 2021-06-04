const express = require('express');
const Form = require('../models/form');

const router = express.Router();

router.post('/send_form', async (req, res) => {
    try {
        const formdata = await Form.create(req.body);

        return res.send({
            formdata,
        });
    } catch (err) {
        return res.status(400).send({ error: 'Form send failed' });
    }
});

module.exports = app => app.use('/form', router);
