let dropdown = document.querySelectorAll('.Dropdown');

<<<<<<< HEAD
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
=======
>>>>>>> 9b5f74b11e8faf914e97ea89042f54afa368ec03
