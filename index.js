// const dropdownList = document.getElementsByClassName("Container__atags")[0];
// const button = document.getElementsByClassName("Container__dropdown")[0];

// dropdownList.addEventListener('click', (event) => {
//     dropdownList.classList.toggle('Display--none');
//     dropdownList.classList.toggle('Display--yes');
// });
// class DisplayDropdown{
//     constructor(element){

//         this.element = element;
//         this.element.addEventListener('click', this.dropdownShow())

//     }


// dropdownShow(){
   

//         console.log('working')

//         document.querySelector('.Container--none').style.display = 'relative';

//     };
// }


// const address = document.querySelector('.Container__dropdown')
// const dropdown = new DisplayDropdown(address);
let displayIt = document.querySelector('.Container__atags');
let address = document.querySelector('.Container__dropdown');

class DisplayDropdown{
    constructor(element){
      this.element = element;
      this.element.addEventListener('click', this.dropdownShow);
    }
    dropdownShow(){
      console.log('working')
      displayIt.classList.toggle('Container--none');
      displayIt.classList.toggle('Container--yes');
   //document.querySelector('.Container--none').style.display = 'relative';

    };
   }
  
   address = new DisplayDropdown(address);