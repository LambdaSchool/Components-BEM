class ddmenu {
    constructor(){
        this.drop = document.querySelector('.dropdown__button');
        this.menu = document.querySelector('.dropdown__content');
        
        this.drop.addEventListener('click', this.tog.bind(this));
    }
    tog() {
        this.menu.classList.toggle('dropdown__content--display');
    }
}

new ddmenu();