import $ from 'jquery';

class ToggleMenu {
  constructor() {
    // cache elements from page
    this.btn = $('.top-line__toggle-menu');
    this.mainMenu = $('.main-menu');

    this.events();
  }

  events() {
    this.btn.on('click', this.toggleMenu.bind(this));
  }

  // custom functions
  toggleMenu() {
    this.mainMenu.toggleClass('main-menu--active');
  }
}

export default ToggleMenu;
