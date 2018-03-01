class Dropdown {
    constructor(element){
        this.element = element;

        this.element.addEventListener('click', () =>{
            const menu = document.getElementsByClassName('Dropdown__nav')[0];
            console.log(menu);
            if (menu.style.display === 'none') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    }
}
const element = document.getElementsByClassName('Dropdown__header')[0];
console.log(element);
const dropdown = new Dropdown(element);