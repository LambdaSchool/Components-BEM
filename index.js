const dropmenu = document.getElementById('.dropdown__content')

const dropEvent = (event) => {
    event.stopPropagation();
    console.log('dropdown is working');
    event.target.classList.toggle('Dropdown--show');
}


dropmenu.addEventListener('click', dropEvent);


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

