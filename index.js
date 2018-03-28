const DropdownB = document.querySelector('.Dropdown--btn');
const DropC = document.querySelector('.Dropdown--content');



const showContent = () =>{

  if (DropC.style.display === 'none') {
       DropC.style.display = 'flex';
   } else {
       DropC.style.display = 'none';
   }
};

DropdownB.addEventListener('click', showContent);
