class Solution {
    constructor(element) {
      this.element = element;
  
      console.log(this.element)
  
      this.element.addEventListener("click", () => {
      this.element.classList.add("Block--hidden");
      });
    }
  }
  
  let blocks = document.getElementsByClassName("Block");
  blocks = Array.from(blocks).map(block => {
    return new Block(block)
  });
  
  console.log(blocks);