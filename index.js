var Dropdown = document.getElementsByClassName("Dropdown")[0];
var Button = document.getElementsByClassName("Header_button")[0];
Button.addEventListener("click", function(event){
    Dropdown.classList.toggle("Dropdown--Show");
});