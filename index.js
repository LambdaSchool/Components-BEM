let dropdown = document.querySelectorAll('.Dropdown');

class Dropdown {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.dropIt();
    });
  };

  dropIt() {
    this.element.classList.toggle('Dropdown--display');
  };
};

dropdown = Array.from(dropdown).map(element => {
  return new Dropdown(element);
});