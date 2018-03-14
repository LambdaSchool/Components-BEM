class Dropdown {
    constructor(element) {
        this.element = element;
        this.child = document.querySelector('.Dropdown__Content');
        console.log(this.child.classList);
        this.element.addEventListener('click', () => {
            // let children = this.element.children;
            // children[1].classList.add('Dropdown--Display'); // for use with getElementsByClassName array
            this.child.classList.add('Dropdown--Display');
        });
    }
}

let dropdown = document.getElementsByClassName('Dropdown');
dropdown = Array.from(dropdown).map(dd => {
    return new Dropdown(dd);
});
