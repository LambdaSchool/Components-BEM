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
let dropDown = document.querySelector('Box__DropdownBtn');

// Dropdown constructor
class Dropdown {
	constructor(el) {
		this.element = el;
		this.element.addEventListener('click', this.showContent);
	}
	// Dropdown prototype
}