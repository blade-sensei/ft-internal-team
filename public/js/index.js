const searchBtns = document.querySelectorAll('.search-btn');
setClickHandlerSearchButton(searchBtns);


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

function setClickHandlerSearchButton(buttons) {
    for (button of buttons) {
        setHandleSearchButton(button);
    }
}

function setHandleSearchButton(searchBtn) {
    searchBtn.addEventListener('click', () => {
        const parent = searchBtn.parentElement;
        const searchInput = parent.querySelector('.search-input');
        const searchText = searchInput.value;
        let searchKeyWords = searchText.split(' ');
        searchKeyWords = searchKeyWords.join('+');
        window.location.href = `http://localhost:3000/search?q=` + searchKeyWords; 
    })
}
