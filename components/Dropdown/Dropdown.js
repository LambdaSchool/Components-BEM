
let links = document.getElementsByClassName('Dropdown')[0];
let hidden = document.getElementsByClassName('Dropdown__hide')[0];

links.addEventListener('click', () => {
    if(hidden === document.getElementsByClassName('Dropdown__hide')[0]) {
        hidden.classList.remove('Dropdown__hide');
        hidden = hidden.classList.add('Dropdown__show');
    }
});




























// if(hidden === document.getElementsByClassName('.Dropdown__hide')) {
//     hidden.classList.remove('Dropdown__hide');
// }
//  hidden = hidden.classList.add('Dropdown__show'); 