const searchBtns = document.querySelectorAll('.search-btn');
setClickHandlerSearchButton(searchBtns);

const searchBtnToggle = document.querySelector('#search-toggle-id');
searchBtnToggle.addEventListener('click', () => {
   const searchFormContainer = document.querySelector('.header-search-section');
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
        let searchText = searchInput.value;
        searchText = removeExtraSpaces(searchText);
        let searchKeyWords = searchText.split(' ');
        searchKeyWords = searchKeyWords.join('+');
        window.location.href = `search?q=` + searchKeyWords; 
    })
}

function removeExtraSpaces(text) {
    const textNoSideSpaces = text.trim();
    const textNoExtraSpaces = textNoSideSpaces.replace(/\s+/g, " ");
    return textNoExtraSpaces;
}

