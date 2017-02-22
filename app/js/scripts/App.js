import $ from 'jquery';
import TestModule from './modules/TestModule';
import ToggleMenu from './modules/ToggleMenu';
import Preloader from './modules/Preloader';
import Slideshow from './modules/Slideshow';

var testModule = new TestModule();
var toggleMenu = new ToggleMenu();
var slideshow  = new Slideshow();

$(document).ready(function() {
  var preloader  = new Preloader();
});
