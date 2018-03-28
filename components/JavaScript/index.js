class Dropdown {
	constructor(element) {
		this.element = element;
	}

	dropdownOptions() {
		this.element.addEventListener('click', function() {
			document.querySelector('.Dropdown__options--click').style.display = 'relative';
		});
	}

}

const address = document.querySelector('.Box__header--dropdown');
const dropdown = new Dropdown(address);

dropdown.dropdownOption();