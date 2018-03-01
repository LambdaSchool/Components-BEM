class Dropdown {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.element.classList.add('Dropdown-list');
        });
    }
}



let dropdown = document.getElementsByClassName('Dropdown');
dropdown = Array.from(Dropdown).map(item => {
    return new Dropdown(item);
});

console.log(dropdown);