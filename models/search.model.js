const axios = require('axios');
const config = require('../config.json');

async function searchByKeyWord(keywords, { maxResults, page }) {
    const headers = {
        'X-Api-Key': config.token,
        'Content-Type': 'application/json'
    };
    const offset = (page - 1) * maxResults;
    const body = {
        queryString: keywords,
        resultContext : {
            aspects :['images','lifecycle','location','master','nature','summary','title'],
            maxResults,
            offset
       },
       queryContext : {
        curations : ["ARTICLES"]
     },
    };
    const url = 'http://api.ft.com/content/search/v1';
    const searchResults = await axios.post(url, body, { headers})
    return searchResults.data.results[0];
}

module.exports = {
    searchByKeyWord,
}