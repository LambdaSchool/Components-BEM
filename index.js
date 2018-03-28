const dropdownList = document.getElementsByClassName("Container__atags")[0];
const button = document.getElementsByClassName("Container__dropdown")[0];

dropdownList.addEventListener('click', (event) => {
    dropdownList.classList.toggle('Display--none');
    dropdownList.classList.toggle('Display--yes');
});