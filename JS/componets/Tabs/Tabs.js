
// class Tog {
//     constructor(elemen) {
//         this.elemen = elemen;
//         this.dataNumber = elemen.dataset.tab;
//     }
// }

let data1 = document.querySelectorAll('[data-tab="1"]');
let data2 = document.querySelectorAll('[data-tab="2"]');
let data3 = document.querySelectorAll('[data-tab="3"]');

let data1Tog = function() {
    data1[1].classList.toggle('Tabs__item');
}
let data2Tog = function() {
    data2[1].classList.toggle('Tabs__item');
}
let data3Tog = function() {
    data3[1].classList.toggle('Tabs__item');
}

data1[0].addEventListener('click', data1Tog);
data2[0].addEventListener('click', data2Tog);
data3[0].addEventListener('click', data3Tog);