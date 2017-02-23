import $ from 'jquery';

class BlogScroll {
  constructor() {
    // cache elements from page
    this.wind = $(window);
    this.sidebar = $('.blog__menu');

    this.events();
  }

  events() {
    $(window).on('scroll', this.makeSticky.bind(this));
    $(window).on('resize', this.makeSticky.bind(this));
  }

  // custom functions
  makeSticky() {
    var stickyStart = this.sidebar.offset().top;
    var wScroll = this.wind.scrollTop();
    if(wScroll >= stickyStart - 30) {
      if(!this.sidebar.hasClass('fixed')) {
        this.sidebar.addClass('fixed')
      }
    } else {
      this.sidebar.removeClass('fixed');
    }
  }
}

export default BlogScroll;
