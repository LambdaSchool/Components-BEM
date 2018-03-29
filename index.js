class Dropdown {
  constructor() {
    this.dropDownButton = document.querySelector('.dropdown_button');
    this.dropDownItems = document.querySelector('.dropdown_menu');
    console.log(this.dropdownMenu);
    
    this.dropDownButton.addEventListener('click', this.toggleMenu.bind(this));
  }
  toggleMenu(event) {
    this.dropdownItems.classList.toggle('dropdown_menu--show');
  }
}

window.onload = () => new Dropdown();
