const dropDownButton = document.querySelector(".Dropdown__button");
const dropDownMenu = document.querySelector(".Dropdown__menu")

console.log(dropDownButton);

dropDownButton.addEventListener("click", () =>{
    dropDownMenu.classList.toggle("Dropdown__menu--clicked");
});


// dropDownButton.forEach( (item) => {
//     item.addEventListener("click", () => {
//         dropDownButton.classList.toggle("Dropdown__menu--clicked");
//         console.log("test");
//     });
// })


/*      let dropdownMenu = document.querySelector('.block__dropdown');

        class DropdownMenu {
            constructor(element) {
                this.element = element;
                this.button = this.element.querySelector('a');
                this.button.addEventListener('click', toggleMenu);
                this.menu = this.element.querySelector('.block__dropdown__menu');
                console.log(this.menu.classList);
            }
            toggleMenu() {
                console.log(this.menu);
                this.menu.classList.toggle('component--hidden');
            }
        }
        const menu = new DropdownMenu(dropdownMenu);

        */ 