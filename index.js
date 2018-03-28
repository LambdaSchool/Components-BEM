let dropdown = document.querySelector('.header__button');

class Dropdown {
    constructor (element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.dropdownOpen();
        })
    }
    dropdownOpen() {
        //console.log('I am being called!');
        let list = document.querySelector('.header__list');
        // list.style.display = 'block';
        if (list.style.display === "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    };
    
}





dropdown = new Dropdown(dropdown); // this creates an object 