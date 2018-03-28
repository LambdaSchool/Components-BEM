class Dropdown {
    constructor(element) {
    this.element = element;
    this.element.addEventListener('mousedown', () => {
        Dropdown[0].classList.add('Dropdown');
    });
    this.element.addEventListener('mouseout', () => {
        Dropdown[0].classList.remove('Dropdown');
    });
}
}