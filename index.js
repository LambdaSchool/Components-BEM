let dropdown = document.querySelector('.header__button');
dropdown.addEventListener('click',dropdownOpen)


function dropdownOpen() {
    //console.log('I am being called!');
    let list = document.querySelector('.header__list');
    // list.style.display = 'block';
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }



};
