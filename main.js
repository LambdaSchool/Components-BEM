// Added DOMString for Click & DropdownReveal //
const dropdown = document.querySelector('.Dropdown');
const reveal = document.querySelector('.DropdownReveal');

// Upon click Dropdown will display HTML Attributes //
class Dropdown {
    constructor(button, list) {
        button.addEventListener('click', (event) => {
            list.classList.toggle('display');
        });
    }
}

const dd = new Dropdown(dropdown, reveal);

// Without Components //
dropdown.addEventListener('click', (event) => {
    reveal.classList.toggle('display');
});