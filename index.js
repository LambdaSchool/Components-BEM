
//use position absolute 
//display = block; 
//but give it a display: none
// dont put modifiers on elements put it on block 

//this.content = this.element.queryselector

class DropDown {
    constructor(element) {
        this.element = element;

        this.button = this.element.querySelector('.box__button');

        this.button.addEventListener('click', () => {
            this.toggleContent();
        })


    }

    toggleContent() {
        this.element.classList.toggle("Dropdown-Active")
    }

}

let dropdown = document.querySelector('.box');
dropdown = new DropDown(dropdown);

// class Traveler {
//     constructor(element) {
//         this.element = element;
//         this.distance = 10;
//         this.element.addEventListener('click', () => {
//             this.Unhide();
//         })
//     }
//     Unhide() {
//         const element = this.element;
//         const clickElement = document.getElementsByClassName("box__options");
//         element.style.visability = `true`
//         if(element.style.visability === "true") {
//             element.style.visability = `hidden`;
//         }
//         // this.interval  = window.setInterval(() => {
//         //     distance += 1;
//         //     element.style.marginLeft = `${distance}px`;
//         // }, 10)
//     }
// }

// let travelers = document.getElementsByClassName("box__button");
// travelers = Array.from(travelers).map(traveler => {
//     return new Traveler(traveler);
// })