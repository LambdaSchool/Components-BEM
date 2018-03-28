// const dropdown = document.querySelector('.Dropdown__button');
// const dropdownMenu = document.querySelector('.Dropdown__menu');

// const toggleShow = (event) => {
//     console.log('clicked');
//     dropdownMenu.classList.toggle('Dropdown__menu--show');
// }

// dropdown.addEventListener('click', toggleShow);

//----------left non-class code above so I can pull from for examples later-----------

class Dropdown {
    constructor() {
      this.DropdownButton = document.querySelector('.Dropdown__button');
      this.DropdownMenu = document.querySelector('.Dropdown__menu');
  
      this.DropdownButton.addEventListener('click', this.toggleMenu.bind(this));
    }
    toggleMenu(event) {
      this.DropdownMenu.classList.toggle('Dropdown__menu--show');
    }
  }
  
  window.onload = () => new Dropdown();