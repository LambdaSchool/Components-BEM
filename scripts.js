let btn = document.querySelector('.BtnContainer__dropdownbtn');

class btnToObj {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.buttonClick();
    });
  }
  buttonClick() {
    this.element.nextElementSibling.classList.toggle('BtnContainer--displayNone');
    this.element.nextElementSibling.classList.toggle('BtnContainer--displayBtn');
  }
}
btn = new btnToObj(btn);
