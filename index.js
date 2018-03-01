

class Button {
    constructor(element) {
      this.element = element;

      this.element.addEventListener("click", () => {
          if(drop.classList.contains("button--hidden")){
            drop.classList.remove("button--hidden");
          }else{
           drop.classList.add("button--hidden"); 
          }
        // drop.style.display = "none";
      });
    }
  }
  
  let collection2 = document.getElementsByClassName("Section__drop");
  let collection = document.getElementsByClassName("Section__button");
  let button = collection[0];
  let drop = collection2[0];
   button = new Button(button);
   
  console.log(button);