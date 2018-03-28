const DropdownB = document.querySelector('.Dropdown--btn');
const DropdownC = document.querySelector('.Dropdown--content');

  const showContent = () =>{
    DropdownC.style.display = 'flex';

  };

DropdownB.addEventListener('click', showContent);
