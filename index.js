class Dropdown {
    constructor(element) {
      this.element = element;
  
      console.log(this.element)
      //msg = <ul>
      
      this.element.addEventListener("click", () => {
      this.element.classList.toggle("selected");
      //this.element.innerHTML = '<div class="Box"><ul><li>Lambda</li><li>Google</li><li>MDN</li></ul><div>';


      });

      



      //this.element.addEventListener("click", () => {
      //this.element.classList.remove("selected");
      //this.element.innerHTML = 'Back to normal';
      //this.element.innerHTML("Holy Shit it's working!")});
      //});
  }
}
  let topDropdown = document.getElementsByClassName("Dropdown");
  console.log(topDropdown);
  topDropdown = new Dropdown(topDropdown[0]);
  
  //topDropdown = 
  
  //blocks = Array.from(blocks).map(block => {
    //return new Block(block)
  //});
  
  