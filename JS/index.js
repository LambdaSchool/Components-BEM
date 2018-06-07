
// class Dropdown {
//     constructor(element) {
//         this.element = element;
//         this.element.addEventListener('click', () => { this.menuEvent() });
//     }

//     menuEvent() {
//         for (let i = 0; i > elements.length; i++) {
//             elements[i].classList.toggle('Display-toggle');
//         }
//     }
// }

let elements = document.getElementsByClassName('Dropdown__menu-item');
let button = document.getElementsByClassName('Dropdown__menu-button');

let display = function() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('Display-toggle');
    }
}


button[0].addEventListener('click', display);