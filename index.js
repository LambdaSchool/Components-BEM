
let clickThis = document.getElementsByClassName('section-box')[0];
let box = document.getElementsByClassName('box')[0];

let flag = 'off';

clickThis.addEventListener('click', () => {
    if (flag === 'off') {
    box.style.display = 'flex';
    flag = 'on'
    }
    else {
        box.style.display = 'none';
        flag = 'off';
    }
})