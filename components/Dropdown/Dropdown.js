class Dropdowns {
    constructor(element) {
      this.element = element;
      this.btn = this.element.querySelector(".Dropdown__btn");
      this.test = this.element.querySelector(".Dropdown__content")
  
      this.btn.addEventListener("click", () => {
        this.element.classList.toggle("Dropdown--display");
        console.log("clicked");
      });
    }
  }
  
  let dropdown = document.querySelectorAll(".Dropdown");
  console.log(dropdown);
  dropdown = Array.from(dropdown).map(dropdowns => {
    return new Dropdowns(dropdowns)
  });