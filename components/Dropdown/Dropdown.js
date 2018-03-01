class Dropdown {
    constructor(element) {
      this.element = element;
  
      this.element.parentNode.addEventListener("click", () => {
        this.element.classList.toggle("Dropdown__menu--reveal");
      });
    }
  }
  
  let dropdownMenu = document.getElementsByClassName("Dropdown__menu");
  dropdownMenu = Array.from(dropdownMenu).map(menu => {
    return new Dropdown(menu)
  });