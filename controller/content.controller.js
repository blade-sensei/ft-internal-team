const express = require('express');

const router = express.Router();
const contentModel = require('../models/content.model');


router.get('', async (req, res) => {
    const article = contentModel.getArticle();
    article.publishedData = getDataFormat(article.publishedDate);
    article.byline = article.byline.substring(3);
    // todo split content on paragraphs to get newlines maybe we can use split by pattern '. '
    res.render('content.view.html', {article})
});

function getDataFormat(dateString) {
    const dateFormat = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-GB', { month: 'long'});
    const month = formatter.format(dateFormat).toUpperCase();
    const year = dateFormat.getFullYear();
    const date = dateFormat.getDate();
    const fullDateFormat = ` ${month} ${date} ${year}`;
    return fullDateFormat;
}

module.exports = router;