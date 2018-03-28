const list = document.querySelector('.dropdown__list');
const toggle = document.querySelector('.dropdown__toggle');
class Dropdown {
    constructor(element) {
        this.element = element

        this.element.addEventListener('click', () => {this.toggleList()})

    }
    toggleList() {
        list.classList.toggle('toggleList')
    }
}

toggle = new Dropdown(toggle);