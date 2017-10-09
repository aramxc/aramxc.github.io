window.onload = function hello() {

  //typed.js script
  var typed = new Typed('#hello', {
    strings: ['', '<h1>Hello, ^100 I\'m Aaron.</h1>'],
    typeSpeed: 60,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 200,
  });
};


function openModal(evt, modalName) {
  'use strict';

  var i;
  var x = document.getElementsByClassName('modal');
  var tablinks;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-highlight", "");
  }
  document.getElementById(modalName).style.display = 'block';
  evt.currentTarget.className += " tab-highlight";
}
