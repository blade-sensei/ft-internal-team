const express = require('express');

const router = express.Router();
const searchModel = require('../models/search.model');
const utils = require('../helpers/utils');

const MAX_ARTICLES_BY_PAGE = 25;


router.get('/', async (req, res) => {
    const queryKeyWord = req.query.q;
    const currentPageAsked = Number(req.query.page) || 1;
    const searchOptions = {
        maxResults: MAX_ARTICLES_BY_PAGE,
        page: currentPageAsked,
    }
    const searchResults = await searchModel.searchByKeyWord(queryKeyWord, searchOptions);
    let articles =  searchResults.results;
    articles = injectFormatedData(articles);
    const totalArticles = searchResults.indexCount;
    const pagesNumber = utils.getNumberOfPages(totalArticles, MAX_ARTICLES_BY_PAGE);
    const statusPage = getStatusPage(currentPageAsked, pagesNumber);
    res.render('search-list.view.html',
    {
        pagesNumber,
        totalArticles,
        statusPage,
        queryKeyWord,
        results: searchResults.results,
        maxArticlePage: MAX_ARTICLES_BY_PAGE,
        
    });
});

function injectFormatedData(articles) {
    return articles.map(article => {
        article.date = utils.getDataFormat(article.lifecycle.lastPublishDateTime);
        return article;
    })
}

function getStatusPage(currentPage, maxPage) {
    const next = currentPage < maxPage ? currentPage + 1: maxPage;
    const previous = currentPage > 1 ? currentPage - 1 : 1;
    return {
        current: currentPage,
        next,
        previous
    }
}


module.exports = router;