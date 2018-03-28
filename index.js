// Set up references to the DOM
const dropdown = document.querySelector(".Box__headDropdown");
const dropUl = document.querySelector(".Box__headDropUl");

dropdown.addEventListener('click', () => {
  dropUl.classList.toggle('Box__headDropUl');
});