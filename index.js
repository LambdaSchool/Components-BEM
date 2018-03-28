// access dropDown button
let dropDown = document.querySelector('.Box__DropdownContent');
let dropButton = document.querySelector('.Box__DropdownBtn');
let childDropdown = dropDown.children;
// console.log(dropDown);
// console.log(childDropdown);

// Dropdown constructor
class Dropdown {
    constructor(el) {
        this.element = el;
        this.element.addEventListener('click', this.showContent)
    }
    // Dropdown prototype
    showContent() {
        dropDown.classList.toggle("show");
    }
}

// make instances of Dropdown
childDropdown = Array.from(childDropdown).map(element => {
    return new Dropdown(element);
})
// console.log(childDropdown);

for (let i = 0; i < childDropdown.length; i++) {
    dropButton.addEventListener('click', childDropdown[i].showContent);
}