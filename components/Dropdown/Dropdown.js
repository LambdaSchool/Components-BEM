// Does not work yet

// class DropDownItem {
//     constructor(element) {
//         this.element = element;
//         this.button = this.element.getElementsByClassName("Dropdown__button");
//         this.button.addEventListener("click", () => {
//             this.dropDownMenu();
//         });
//     }

//     dropDownMenu() {
//         this.element.classList.toggle("show");
//     }
// }

// let toggles = document.getElementsByClassName("Dropdown");
// toggles = Array.from(toggles).map(toggle => {
//     return new DropDownItem(toggle);
// });




  const drop = () => {
    document.getElementById("Dropdown__menu").classList.toggle("show");}