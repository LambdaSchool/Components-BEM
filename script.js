let dropdownButton = document.querySelector('.dropdown');
let invisibleDropdown = document.querySelector('.dropdownInvisible');


class dropdownMenu {
    constructor(eb) {
        this.element = eb;
        this.element.addEventListener('click', () => {this.dropdownAction()})
    }
    dropdownAction() {
        invisibleDropdown.classList.toggle('.dropdownInvisible');
    }
}

dropdownButton = new dropdownMenu(dropdownButton);