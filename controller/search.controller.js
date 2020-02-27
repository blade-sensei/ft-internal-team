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
    
    const offsetPage = getOffset(currentPageAsked, MAX_ARTICLES_BY_PAGE);
    const searchResults = await searchModel.searchByKeyWord(queryKeyWord, searchOptions);
    let articles =  searchResults.results;
    articles = addFormatedData(articles);
    const totalArticles = searchResults.indexCount;
    const pagesNumber = utils.getNumberOfPages(totalArticles, MAX_ARTICLES_BY_PAGE);
    const statusPage = getStatusPage(currentPageAsked, pagesNumber);
    res.render('search-list.view.html',
    {
        offsetPage,
        pagesNumber,
        totalArticles,
        statusPage,
        queryKeyWord,
        results: searchResults.results,
        maxArticlePage: MAX_ARTICLES_BY_PAGE,
        
    });
});

function addFormatedData(articles) {
    return articles.map(article => {
        console.log(article.images[0].url);
        article.date = utils.getDataFormat(article.lifecycle.lastPublishDateTime);
        return article;
    })
}

function isFirst(currentPage) {
    return currentPage === 1;
}

function isLast(currentPage, maxPage) {
    return currentPage === maxPage;
}

function getStatusPage(currentPage, maxPage) {
    const next = currentPage < maxPage ? currentPage + 1: maxPage;
    const previous = currentPage > 1 ? currentPage - 1 : 1;
    const isFirstPage = isFirst(currentPage);
    const isLastPage = isLast(currentPage, maxPage);
    return {
        current: currentPage,
        next,
        previous,
        isFirstPage,
        isLastPage,
    }
}

function getOffset(page, maxArticlesByPage) {
    const maximumOffset = page * maxArticlesByPage;
    const minimumOffset = maximumOffset - (maxArticlesByPage - 1);
    return {
        max: maximumOffset,
        min:  minimumOffset,
    }
}

module.exports = router;
