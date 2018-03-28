
function myFunction() {
    document.getElementById("dropstuff").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.Dropdown__menu')) {

    var dropdowns = document.getElementsByClassName("Dropdown__items");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}