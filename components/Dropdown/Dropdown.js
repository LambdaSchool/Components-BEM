class dropdownButton {
    constructor(element){
        this.element = element;
        this.element.addEventListener('mouseenter', this.openDropdown);
        this.element.addEventListener('click', this.closeDropdown);
    };
    openDropdown(){
        document.querySelector('.dropdown__stuff').style.display = 'flex';
    }
    closeDropdown(){
        document.querySelector('.dropdown__stuff').style.display = 'none';
    }
}

let dropdown = document.querySelector('.dropdown__button')
new dropdownButton(dropdown);



//document.querySelector('.dropdown').style.marginRight = '50%';