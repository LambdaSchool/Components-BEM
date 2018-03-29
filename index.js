const dropdown = document.querySelector('.Dropdown');
const list = document.querySelector('.Dropdown__list');

function toggleList() {
  console.log(list.classList);
  list.classList.toggle('Dropdown__list--show');
  console.log(list.classList);
}

dropdown.addEventListener('click', toggleList);