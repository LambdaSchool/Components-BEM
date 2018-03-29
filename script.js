class DropdownMenu {
    constructor(eb) {
        this.element = eb;
        this.button = this.element.querySelector('.Dropdown__button');
        this.button.addEventListener('click', () => {
            this.dropdownAction();
        });
    }
    dropdownAction() {
        this.element.classList.toggle('Dropdown--active');
    }
}

let dropdowns = document.querySelectorAll('.Dropdown');



//Testing
// dropdowns = Array.from(dropdowns).map((dropdown) => new DropdownMenu(dropdown));

//middle is best
// dropdowns = Array.from(dropdowns).map((dropdown) => {console.log(dropdowns);
// })

// dropdowns = Array.from(dropdowns).map( (dropdown) => {
//     console.log(dropdown);
//   })
