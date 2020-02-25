const express = require('express');

const router = express.Router();
const searchModel = require('../models/search.model');


router.get('/', async (req, res) => {
    const queryKeyWord = req.query.q;
    const searchResults = await searchModel.searchByKeyWord(queryKeyWord);
    console.log(searchResults);
    res.render('search-list.view.html', { results: searchResults });
});

module.exports = router;