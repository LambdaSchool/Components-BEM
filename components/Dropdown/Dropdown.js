class ToggleDropdown {
  constructor(element) {
    this.element = element;
    console.log(this.element);
    this.element.addEventListener("click", () => {
      console.log("Element clicked");
      this.toggleDisplay();
    });
  }

  toggleDisplay() {
    console.log("Inside Toggle Display");
    const dropdown_content = document.querySelector(".Dropdown__content");
    dropdown_content.classList.toggle("Dropdown--active"); 
  }
}

let button = document.querySelector(".Dropdown__button");
const dropdown = new ToggleDropdown(button);