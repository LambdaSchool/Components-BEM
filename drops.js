class Dropdown {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.element.classList.add('Dropdown__Content--Display')
        });
    }
}

let dropdown = document.getElementsByClassName('Dropdown__Content');
dropdown = Array.from(dropdown).map(dd => {
    return new Dropdown(dropdown)
});