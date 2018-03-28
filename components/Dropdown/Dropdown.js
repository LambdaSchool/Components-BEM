const btn = document.querySelector('.Dropdown__btn');
const dropdown = document.querySelector('.Dropdown__list');

btn.addEventListener('click', () => {
    dropdown.classList.toggle('Dropdown--active');
})