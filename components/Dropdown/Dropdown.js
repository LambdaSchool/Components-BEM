class dropdownButton {
    constructor(element){
        this.element = element;
        console.log('hello!? this element??');
        this.element.addEventListener('click', () => { this.openDropdown });
    };
    openDropdown(){
        console.log('hello');
        document.querySelector('.dropdown__stuff').style.display = 'flex';
    }
}

const dropdown = new dropdownButton(document.querySelector('.dropdown__button'));