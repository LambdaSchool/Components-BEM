let dropdownMenu = document.querySelector('.block__dropdown');

class DropdownMenu {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('a');
    this.button.addEventListener('click', event => {
      this.menu.classList.toggle('component--hidden');
    });
    this.menu = this.element.querySelector('.block__dropdown__menu');
  }
}

const menu = new DropdownMenu(dropdownMenu);
