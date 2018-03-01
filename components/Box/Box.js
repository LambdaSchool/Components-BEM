class Dropdown {
  constructor(element) {
    this.element = element;

    this.element.addEventListener('mouseover', () => {
      dropdownMenus[0].classList.add('top__dropdown-menu');
    });
    this.element.addEventListener('mouseout', () => {
      dropdownMenus[0].classList.remove('top__dropdown-menu');
    });
  }
}

let dropdowns = document.getElementsByClassName('top__dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

let dropdownMenus = document.getElementsByClassName(
  'top__dropdown-menu-hidden'
);
