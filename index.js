// let blocks = document.querySelectorAll('.Block');

// class Block {
//   constructor(el){
//     this.element = el;
//     this.element.addEventListener('click', () => { this.highlight()})
//   }
//   highlight(){
//     this.element.classList.toggle('Block--redBorder');
//   }
// }

// blocks = Array.from(blocks).map( element => {
//   return new Block(element);
// })

// access dropDown button
let dropDown = document.querySelector('.Box__DropdownContent');
let dropButton = document.querySelector('.Box__DropdownBtn');
let childDropdown = dropDown.children;

// Dropdown constructor
class Dropdown {
	constructor(el) {
		this.element = el;
		this.element.addEventListener('click', this.showContent)
	}
	// Callback Function
	showContent() {
		dropDown.classList.toggle("show");
	}
}

// Dropdown prototype
childDropdown = Array.from(childDropdown).map( element => {
	return new Dropdown(element);
})
console.log(childDropdown);

for (let i = 0; i < childDropdown.length; i++) {
	dropButton.addEventListener('click', childDropdown[i].showContent)
}