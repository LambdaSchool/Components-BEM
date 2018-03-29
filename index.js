class Dropdown {
	constructor(element) {
		this.element = element;

		this.element.addEventListener('click', () => {this.dropdownOptions()});
	}

	dropdownOptions() {
		document.querySelector('#toggle').classList.toggle('Dropdown__hidden');
		document.querySelector('#toggle').classList.toggle('Dropdown__options--click');
	}

}

const address = document.querySelector('#toggle');
new Dropdown(address);

















// const button = document.querySelector('button');

// const eventHandler = function(x) {
// 	x.classList.toggle('Dropdown__hidden');
// 	x.classList.toggle('Dropdown__options--click');
// }

// const clicker = function(x) {
// 	x.addEventListener('click', function() {
// 		eventHandler(x);
// 	});
// };

//console.log(button);

// clicker(button);