//opening script run on page load
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

/*
function openModal() {
  var openContactLink = getElementById('contactLink');
  openContactLink.onclick = function () {
    //get modal element
    var modal = getElementByClass('modal');

    //set modal display to flex to show content
    modal.style.display = 'flex';
  };
};

window.onload = function () {
  var closeButton = getElementById('close');

  closeButton.onclick = function closeModal() {

    //get modal element
    var modal = getElementByClass('modal');

    //set modal display to none
    modal.style.display = 'none';

  };
};
*/
