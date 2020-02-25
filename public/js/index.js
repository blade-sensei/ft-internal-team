const searchBtn = document.querySelector('#search-btn-id');
searchBtn.addEventListener('click', () => {
    const searchInput = document.querySelector('#search-input-id');
    const searchText = searchInput.value;
    let searchKeyWords = searchText.split(' ');
    searchKeyWords = searchKeyWords.join('+');
    window.location.href = `http://localhost:3000/search?q=` + searchKeyWords; 
})