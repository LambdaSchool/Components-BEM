class DropdownButton
{
  constructor(button) {
    this.button = button;
    this.button.addEventListener('click', () => this.toggleDropDown() );
    this.dropdown = document.querySelector('.dropdown');
  }

  toggleDropDown() {
    this.dropdown.classList.toggle('invisible');
  }
}

let button = new DropdownButton(document.querySelector('button'));



