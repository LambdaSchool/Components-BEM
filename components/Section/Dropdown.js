class Section__dropdown {
    constructor(element) {
        this.element = element;

        this.element.addEventListener('click',() => {
            this.element.classList.add('Section__subDropdown')
        });
    }
}

let dropdown = document.getElementsByClassName('Section__dropdown');


dropdown[0].addEventListener('click', () => {
    // console.log('hi');
    this.element.classList.add('Section__subDropdown')
});