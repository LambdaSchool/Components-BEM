class Dropdown {
    constructor(element) {
    this.element = element;
    this.element.addEventListener('mousedown', () => {
        Dropdown[0].classList.add('DropDown--Box');
    });
    this.element.addEventListener('mouseout', () => {
        Dropdown[0].classList.remove('DropDown--Box');
    });
}
}