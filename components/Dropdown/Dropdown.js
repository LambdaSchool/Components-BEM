// Does not work yet

class DropDownItem {
    constructor(element) {
        this.element = element;
        this.button = document.getElementsByClassName('Dropdown__button');
        this.button.addEventListener('click', () => {
            this.dropDownMenu();
        });
    }

    dropDownMenu() {
        const element = this.element.classList.click('Dropdown__link');
    }
}

let toggles = document.getElementsByClassName('Dropdown');
toggles = Array.from(toggles).map(toggle => {
    return new DropDownItem(toggle);
});

