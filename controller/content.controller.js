const express = require('express');

const router = express.Router();
const contentModel = require('../models/content.model');


router.get('', async (req, res) => {
    const article = contentModel.getArticle();
    res.send('content page');
});

module.exports = router;