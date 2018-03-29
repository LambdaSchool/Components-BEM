function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show')
}
let button = document.querySelector('.Dropdown__button')
button.onclick = function(event) {
        let dropdowns = document.getElementById('myDropdown')
        console.log(dropdowns)
        dropdowns.classList.toggle('show')
}