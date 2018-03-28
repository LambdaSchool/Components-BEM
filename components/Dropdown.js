const list = document.querySelector('.dropdown__List');
const toggle = document.querySelector('.dropDown__Toggle');
class Dropdown {
    constructor(element) {
        this.element = element

        this.element.addEventListener('click', () => {this.toggleList()})

    }
    toggleList() {
        list.classList.toggle('toggleList')
    }
}

toggle = new Dropdown(element);