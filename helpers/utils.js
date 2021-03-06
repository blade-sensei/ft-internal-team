function getDataFormat(dateString) {
    const dateFormat = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-GB', { month: 'long'});
    const month = formatter.format(dateFormat).toUpperCase();
    const year = dateFormat.getFullYear();
    const date = dateFormat.getDate();
    const fullDateFormat = `${month} ${date} ${year}`;
    return fullDateFormat;
}

function getNumberOfPages(totalArticles, maxArticlesByPage) {
    const pages = totalArticles / maxArticlesByPage;
    return Math.ceil(pages);
}

module.exports = {
    getDataFormat,
    getNumberOfPages,
}