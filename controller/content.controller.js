const express = require('express');

const router = express.Router();
const contentModel = require('../models/content.model');
const utils = require('../helpers/utils');


router.get('/:id?', async (req, res) => {
    const articleAddOnURL = req.params.id;
    const article = contentModel.getArticle();
    article.publishedData = utils.getDataFormat(article.publishedDate);
    article.byline = article.byline.substring(3);
    article.paragraphs = getParagraphs(article.bodyXML);
    // todo split content on paragraphs to get newlines maybe we can use split by pattern '. '
    res.render('content.view.html', {article})
});

function getParagraphs(resume) {
    const paragraphs = resume.split('. ');
    return paragraphs.map(paragraph => {
        return paragraph + '.';
    });
    
}


module.exports = router;