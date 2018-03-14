class Dropdown {
  constructor(element, hideClass) {
    this.element = element
    this.clicked = false
    this.child = [...this.element.children].filter(child => child.className === hideClass)[0]

    this.element.addEventListener('click', (e) => this.handleClickEvent(e))
  }

  handleClickEvent(e) {
    if (this.clicked && this.child.classList.length) this.child.classList.remove('display')
    else this.child.classList.add('display')
    this.toggleDropdown()
  }

  toggleDropdown() {
    this.clicked = !this.clicked
  }
}

const dropdown = new Dropdown(
  document.querySelector('.Dropdown'),
  'Dropdown__List'
)

