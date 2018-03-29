const dropdown = document.querySelector('.Dropdown');
const list = document.querySelector('.Dropdown__list');

function toggleList() {
  list.classList.toggle('Dropdown__list--show');
}

dropdown.addEventListener('click', toggleList);