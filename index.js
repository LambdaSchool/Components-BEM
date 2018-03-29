class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".Dropdown__button");

    this.button.addEventListener("click", () => {
      this.display();
    });
  }

  display() {
  	document.querySelector('.Dropdown__content').classList.toggle('Dropdown__content--active');
  	document.querySelectorAll('.Dropdown__link').forEach(function(x) {
  		x.classList.toggle('Dropdown__link--active');
  	});
  }
}

let dropdowns = document.querySelectorAll(".Dropdown");
Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));


// daily javascript challenge below -- not directly relevant 
/*
function commonElements(arr1, arr2) {
  const result = [];
  arr1.forEach(element => {if (arr2.includes(element)) result.push(element);});
  return result;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));
*/