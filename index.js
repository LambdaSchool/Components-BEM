let dropdownMenu = document.querySelector('.dropdown');

class DropdownMenu {
  constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('.dropdown__button');
      this.button.addEventListener('click', () => this.toggleMenu());
      this.menu = this.element.querySelector('.dropdown__menu');
  }
  toggleMenu() {
      this.menu.classList.toggle('dropdown__menu--clicked');
  }
}

new DropdownMenu(dropdownMenu);

