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
   const displayToggled = getToggleDisplay(display);
   searchFormContainer.style.display = displayToggled;
})

function getToggleDisplay(currentDisplay) {
    return currentDisplay === 'none' ? 'block': 'none'
}