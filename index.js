// ________ VARIABLES ________
const navButtons = document.getElementById('navButtons');
const navDropdown = document.getElementById('navDropdown');
let navButtonOn = true;
let cursor = 'default';

// ________ NAV DROPDOWN ________
function displayNavButtons() {
    navButtonOn = !navButtonOn;
    if (!navButtonOn){
        navButtons.style.display = 'none'; 
    }
    else navButtons.style.display = 'flex';
}

function cursorDefault() {
    document.body.style.cursor = 'default';
}

function cursorDropdown() {
    document.body.style.cursor = 's-resize';
}

console.log(navButtons);

navDropdown.addEventListener('mouseover', cursorDropdown);
navDropdown.addEventListener('mouseout', cursorDefault);
navDropdown.addEventListener('click', displayNavButtons);