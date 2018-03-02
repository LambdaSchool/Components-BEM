class Dropdown {
  constructor(element){
      this.element = element;
     this.element.addEventListener('mouseover', () => {
          dropdown[0].classList.add('box--dropdownContent');
     });
     this.element.addEventListener('mouseout', () => {
      dropdown[0].classList.remove('box--dropdownContent'); 
     })
  }
}


let dropdowns = document.getElementsByClassName('box--dropdown')
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown))
let dropdown = document.getElementsByClassName('box--dropdownContent-hidden')