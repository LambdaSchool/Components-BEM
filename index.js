const headDropdown = document.querySelector('.Box__headDropdown');
const headDropdownExpanded = document.querySelector('.Box__headDropdown--expanded');

// Create class for quick set up of drop down functionality
class Dropdown {
  // Take in subject of the event and it's trigger
  constructor(subject, trigger) {
    // Listen for triggering event
    trigger.addEventListener('click', () => {
      subject.classList.toggle('hidden'); // Hide/Show element
    })
  }
}

new Dropdown(headDropdownExpanded, headDropdown);