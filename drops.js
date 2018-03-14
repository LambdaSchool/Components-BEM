class Dropdown {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            let dropContent = document.getElementsByClassName('Dropdown__Content'); 
            // dropContent.classList.add('Dropdown__Content--Display');
            console.log(dropContent);
        });
    }
}

let dropdown = document.getElementsByClassName('Dropdown');
dropdown = Array.from(dropdown).map(dd => {
    return new Dropdown(dd);
});
