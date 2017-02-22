import $ from 'jquery';

class Preloader {
  constructor() {
    // cache elements from page
    this.imgs = [];
    this.percents = 1;
    this.wrap = $('.wrapper');
    this.loader = $('.loader');
    this.loaderText = $('#preload-text');

    this.searchAllImages();
    this.events();
  }

  events() {
    var that = this;
    for (var i = 0; i < that.imgs.length; i++) {
      var image = $('<img>', {
        attr: {
          src : that.imgs[i]
        }
      });

      image.on('load', function () {
        that.setPercents(that.imgs.length, that.percents);
        that.percents++;
      });
    }
  }

  // custom functions
  searchAllImages() {
    var images = [];
    $.each($('*'), function () {
      var $this = $(this),
        background = $this.css('background-image'),
        img = $this.is('img');

      if (background != 'none') {
        var path = background.replace('url("', '').replace('")', '');

        images.push(path);
      }

      if (img) {
        var path = $this.attr('src');

        if (path) {
          images.push(path);
        }
      }
    });
    this.imgs = images;
  }
  setPercents(total, current) {
    var percent = Math.ceil(current / total * 100);

    if (percent >= 100) {
      this.wrap.css('display', 'block');
      this.loader.css('display', 'none');
    }

    this.loaderText.text(percent);
  }
}

export default Preloader;
