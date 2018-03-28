class Dropdown {
  constructor() {
    this.dropdownButton = document.querySelector(".Dropdown__buttonTitle");
    this.dropdownMenu = document.querySelector(".Dropdown__menu");

    this.dropdownButton.addEventListener("click", this.showMenu.bind(this));
  }

  showMenu(event) {
    this.dropdownMenu.classList.toggle("Dropdown__menu--show");
  }
}

window.onload = () => new Dropdown();
