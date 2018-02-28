class Section {
    constructor(element) {
        this.element = element;

        this.element.addEventListener('click', () => {
            this.element.classList.add('Section');
        });
    }
}

let blocks = document.getElementsByClassName("Section__dropdown");
blocks = Array.from(blocks).map(block => new Block(block));


console.log(blocks);