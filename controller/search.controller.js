const express = require('express');

const router = express.Router();
const searchModel = require('../models/search.model');
const utils = require('../helpers/utils');



router.get('/', async (req, res) => {
    const queryKeyWord = req.query.q;
    let searchResults = await searchModel.searchByKeyWord(queryKeyWord);
    searchResults = injectFormatedData(searchResults);
    res.render('search-list.view.html', { results: searchResults });
});

function injectFormatedData(articles) {
    return articles.map(article => {
        article.date = utils.getDataFormat(article.lifecycle.lastPublishDateTime);
        return article;
    })
}

module.exports = router;