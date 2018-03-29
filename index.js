const button = document.querySelector('.Dropdown__button')
const dropmenu = document.getElementById('dropDownLinks')

const dropEvent = (event) => {
    dropmenu.classList.toggle('Dropdown__content--show');
}

button.addEventListener('click', dropEvent);


// class Dropdown {
//     constructor (element) {
//         this.element = element;
//         this.element.addEventListener('click', () => this.dropDownEvent()})
//     }
//     dropDownEvent(){
//         this.element.toggle('Dropdown--show')
//     }
// }
// dropmenu = new Dropdown(element);

