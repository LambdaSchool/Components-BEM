// const drbtn = document.querySelector(".Header__dropdown");
// const drone = drbtn.getElementsByTagName("h5");
// drone.style.border = '8px solid red';
const test = document.querySelector(".Header");
// test.style.border = "2px solid red";
const drbtn = document.querySelector("h5");
drbtn.style.backgroundColor = 'green';
const links = document.querySelector(".Header__links");
links.style.backgroundColor = "red";
links.style.display = "none";
const btnBody = document.querySelector(".Header__dropdown")
const lambda = document.querySelector(".Header__lambda");
lambda.style.backgroundColor = "white";
const google = document.querySelector(".Header__google");
google.style.backgroundColor = "white";
const mdn = document.querySelector(".Header__mdn");
mdn.style.backgroundColor = "white";
const pargraphExit = document.querySelector(".Block__paragraph");
// Class Dropdownbtn {
//     constructor(event) {
//         this.element = event;
//         this.element.addEventListener('click', () => {this.drpfunction()} )
//         // event.Google = "https://www.google.com/";
//         // event.MDN = "https://developer.mozilla.org/en-US/";

//     };
//     drpfunction() {
//         this.element.display = "inline-flex"
//     }
    


// };
const dispL = (event) => {
    links.style.display = "inline"
}
const hideDisp = (event) => {
    links.style.display = "none"
}


btnBody.addEventListener('click', dispL);
pargraphExit.addEventListener('mouseover', hideDisp);
// class Block {
//     constructor(el){
//       this.element = el;
//       this.element.addEventListener('click', () => { this.highlight()})
//     }
//     highlight(){
//       this.element.classList.toggle('Block--redBorder');
//     }
//   }
