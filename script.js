let dropdown = document.querySelector(".Dropdown");
let dropdownList = document.querySelector(".Dropdown__list");

dropdown.addEventListener('click', () => {
    dropdownList.style.display = "block";   
});

dropdownList.addEventListener('click', () => {
    dropdownList.style.display = "none";
})