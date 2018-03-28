let btn = document.querySelector('.BtnContainer__dropdownbtn');
const content = document.querySelector('.BtnContainer__DropdownContent');

class btnToObj {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.buttonClick();
    });
  }
  buttonClick() {
    content.classList.toggle('BtnContainer--displayNone');
    content.classList.toggle('BtnContainer--displayBtn');
  }
}
btn = new btnToObj(btn);
