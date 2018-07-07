// Variables
let dropDown = document.querySelector('.Box__DropdownContent');
let dropButton = document.querySelector('.Box__DropdownBtn');
let childDropdown = dropDown.children; // stores a tags

// Dropdown constructor
class Dropdown {
	constructor(el) {
		this.element = el;
	}
	showContent() {
		dropDown.classList.toggle("show");
	}
}

// Makes new Dropdown, with the method showContent();
childDropdown = Array.from(childDropdown).map(element => {
	return new Dropdown(element);
})

// Target = dropButton, event = 'click', listener = 'showContent()'

dropButton.addEventListener('click', childDropdown[0].showContent);
