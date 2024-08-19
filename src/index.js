import './styles.css'

export class Dropdown {
    constructor(dropdownElement) {
      this.dropdown = dropdownElement;
      this.toggle = this.dropdown.querySelector('.dropdown-toggle');
      this.menu = this.dropdown.querySelector('.dropdown-menu');
      this.isHover = this.dropdown.classList.contains('dropdown-hover');
  
      this.addEventListeners();
    }
  
    addEventListeners() {
      if (this.isHover) {
        this.dropdown.addEventListener('mouseenter', () => this.show());
        this.dropdown.addEventListener('mouseleave', () => this.hide());
      } else {
        this.toggle.addEventListener('click', () => this.toggleMenu());
      }
    }
  
    show() {
      this.menu.classList.add('visible');
    }
  
    hide() {
      this.menu.classList.remove('visible');
    }
  
    toggleMenu() {
      this.menu.classList.toggle('visible');
    }
  }
  
// Initialize all dropdowns on the page
document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));