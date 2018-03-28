function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function(event) {
    if (!event.target.matches('Dropdown__button')) {
        let dropdowns = document.getElementsByClassName('Dropdown__Menu')
        let i
        for (i = 0; i < dropdowns.length; i++) {
            let openDropDown = dropdowns[i]
            if (openDropDown.classList.contains('show')) {
                openDropDown.classList.remove('show')
            }
        }
    }
}