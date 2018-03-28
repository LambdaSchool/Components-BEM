const headDropdown = document.querySelector('.Box__headDropdown');
const headDropdownExpanded = document.querySelector('.Box__headDropdown--expanded');

headDropdown.addEventListener('click', () => {
  headDropdownExpanded.classList.toggle('hidden');
})

console.log(headDropdown, headDropdownExpanded);