let bilal  = document.querySelector('.Dropdown');

let hidenchilds = document.querySelector('.Dropdown__hide');

bilal.addEventListener('click', hideChildsFunction);

 function hideChildsFunction(){
     
     hidenchilds.classList.remove('Dropdown__hide');
     hidenchilds.classList.add('Dropdown--show')
 
 }




 


