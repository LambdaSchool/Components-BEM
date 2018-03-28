class dropDown {
    constructor(){
        this.drop = document.querySelector('.Dropbtn');
        this.menu = document.querySelector('.dropdown__content');
        
        this.drop.addEventListener('click', this.tog.bind(this));
    }
    tog() {
        this.menu.classList.toggle('dropdown__content');
    }
}

window.onload = () => new dropDown();