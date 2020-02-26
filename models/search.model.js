const axios = require('axios');
const config = require('../config.json');

async function searchByKeyWord(keywords, options) {
    const headers = {
        'X-Api-Key': config.token,
        'Content-Type': 'application/json'
    };
    const body = {
        queryString: "Donald AND usa",
        resultContext : {
            aspects :['images','lifecycle','location','master','nature','summary','title']
       }
    };
    const url = 'http://api.ft.com/content/search/v1';
    const searchResults = await axios.post(url, body, { headers})
    return searchResults.data.results[0];
}

module.exports = {
    searchByKeyWord,
}