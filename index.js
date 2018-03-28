// access dropDown button
let dropDown = document.querySelector('.Box__DropdownContent');
let dropButton = document.querySelector('.Box__DropdownBtn');
// console.log(dropDown);
// console.log(childDropdown);

// Dropdown constructor
class Dropdown {
    constructor(el) {
        this.element = el;
        this.element.addEventListener('click', this.showContent);
    }
    // Dropdown prototype
    showContent() {
        dropDown.classList.toggle("show");
    }
}
// create an Dropdown instance
let childDropdown = new Dropdown(dropDown);

dropButton.addEventListener('click', childDropdown.showContent);