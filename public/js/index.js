const searchBtn = document.querySelector('#search-btn-id');
searchBtn.addEventListener('click', () => {
    const searchInput = document.querySelector('#search-input-id');
    const searchText = searchInput.value;
    let searchKeyWords = searchText.split(' ');
    searchKeyWords = searchKeyWords.join('+');
    window.location.href = `http://localhost:3000/search?q=` + searchKeyWords; 
})

const searchFormDisplayStatus = {

}
const searchBtnToggle = document.querySelector('#search-toggle-id');
searchBtnToggle.addEventListener('click', () => {
   const searchFormContainer = document.querySelector('.search-box');
   const display = window.getComputedStyle(searchFormContainer).display;
   const className = getDisplayClassName(display);
   searchFormContainer.classList.add(className);
})

function getDisplayClassName(currentDisplay) {
    return currentDisplay === 'none' ? 'display': 'hidden'
}