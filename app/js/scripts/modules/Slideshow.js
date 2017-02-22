import $ from 'jquery';

class Slideshow {
  constructor() {
    // cache elements from page
    this.slideshowLink = $('.works__navigation-link');
    this.slideItems = $('.works__item');
    this.currentSlideItem = $('.works__item--current');
    this.images = $('.works__image img');

    this.events();
  }

  events() {
    this.slideshowLink.on('click', this.sshow.bind(this));
    this.slideshowLink.on('click', this.changeBg.bind(this));
  }

  // custom functions
  sshow(e) {
    e.preventDefault();
    var ind = $(e.currentTarget).attr('data-ind');
    this.currentSlideItem.removeClass('works__item--current');
    this.currentSlideItem = $(this.slideItems[ind]);
    $(this.slideItems[ind]).fadeIn(500, function() {
      $(this).addClass('works__item--current');
      $(this).removeAttr('style');
    });
  }

  changeBg(e) {
    var ind = this.slideItems.index(this.currentSlideItem);
    var nextInd = (ind + 1) >= this.slideItems.length ? 0 : (ind + 1);
    var prevInd = (ind - 1) < 0 ? (this.slideItems.length - 1) : (ind - 1);
    $(this.slideshowLink[0]).attr('data-ind',  nextInd);
    $(this.slideshowLink[1]).attr('data-ind', prevInd);
    $(this.slideshowLink[0]).find('img').attr('src', $(this.images[nextInd]).attr('src'));
    $(this.slideshowLink[1]).find('img').attr('src', $(this.images[prevInd]).attr('src'));
  
  }
}

export default Slideshow;
