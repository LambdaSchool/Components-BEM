class Dropdown {
	constructor(element) {
		this.element = element;

		this.element.addEventListener('click', function() {
			document.querySelector('.Dropdown__options--click').style.display = 'relative';
		});
	}

	// dropdownOptions() {
	// 	this.addEventListener('click', function() {
	// 		document.querySelector('.Dropdown__options--click').style.display = 'relative';
	// 	});
	// }

}

const address = document.querySelector('.Dropdown__button');
const dropdown = new Dropdown(address);

dropdown();