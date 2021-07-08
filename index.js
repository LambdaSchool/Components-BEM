// Variables
let dropDown = document.querySelector('.Box__DropdownContent');
let dropButton = document.querySelector('.Box__DropdownBtn');
let childDropdown = dropDown.children; // stores a tags

// Dropdown constructor
	// classList: This property is useful to add, remove and toggle CSS classes on an element.
		// toggle: Toggles between a class name for an element.
	// Toggles the links from display: block to none
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
