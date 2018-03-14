class DropDown {
    constructor(dropdown){
        this.dropdown = dropdown;
        this.clicked = false;
        this.button = this.dropdown.querySelector('.dropdown');
        let list = this.dropdown.querySelector('.dropdown__list');
       
        this.button.addEventListener("click", () => {
            this.clicked ? list.classList.add("dropdown--active") : list.classList.add("dropdown--inactive");
            this.clicked = !this.clicked;
        })
    }
}

let dropdown = document.querySelector('.dropdown');
dropdown = Array.from(dropdown).map(dropdown => new DropDown(dropdown));