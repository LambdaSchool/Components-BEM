

class Dropdown {
    constructor(element) {
        this.element = element;
        this.element.flag = false;
        this.element.parentNode.addEventListener('click', () => {
            console.log('clicked');
            if (this.element.flag !== true) {
                this.element.classList.add('display_box');
                this.element.flag = true;
            }
            else {
                this.element.classList.remove('display_box');
                this.element.flag = false;
            }
        })
    }
}

let clickThis = document.getElementsByClassName('box')[0];
clickThis = new Dropdown(clickThis);


