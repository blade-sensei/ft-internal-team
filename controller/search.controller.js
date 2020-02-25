const express = require('express');

const router = express.Router();
const contentModel = require('../models/content.model');


router.get('/', async (req, res) => {
    const queryKeyWord = req.query.q;
    res.send('render search');
});

module.exports = router;