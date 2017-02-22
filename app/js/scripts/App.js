import $ from 'jquery';
import TestModule from './modules/TestModule';
import ToggleMenu from './modules/ToggleMenu';
import Preloader from './modules/Preloader';

var testModule = new TestModule();
var toggleMenu = new ToggleMenu();

$(document).ready(function() {
  var preloader  = new Preloader();
});
