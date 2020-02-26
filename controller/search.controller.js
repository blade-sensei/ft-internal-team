const express = require('express');

const router = express.Router();
const searchModel = require('../models/search.model');
const utils = require('../helpers/utils');

const MAX_ARTICLES_BY_PAGE = 25;


router.get('/', async (req, res) => {
    const queryKeyWord = req.query.q;
    const searchResults = await searchModel.searchByKeyWord(queryKeyWord);
    let articles =  searchResults.results;
    articles = injectFormatedData(articles);
    const totalArticles = searchResults.indexCount;
    const pages = utils.getNumberOfPages(totalArticles, MAX_ARTICLES_BY_PAGE);
    res.render('search-list.view.html',
    {
        pages,
        totalArticles,
        results: searchResults.results,
        maxArticlePage: MAX_ARTICLES_BY_PAGE
        
    });
});

function injectFormatedData(articles) {
    return articles.map(article => {
        article.date = utils.getDataFormat(article.lifecycle.lastPublishDateTime);
        return article;
    })
}


module.exports = router;