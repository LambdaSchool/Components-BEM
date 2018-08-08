const dropdown = document.querySelector('.Dropdown');
const reveal = document.querySelector('.DropdownReveal');

// dropdown.addEventListener('click', (event) => {
//   reveal.classList.toggle('display');
// });

class Dropdown {
  constructor(button, list) {
    button.addEventListener('click', (event) => {
      list.classList.toggle('display');
    });
  }
}

const dd = new Dropdown(dropdown, reveal);
