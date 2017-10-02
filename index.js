/* LANDING PAGE SCRIPTS HERE */

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

/* MODAL VARIABLES AND FUNCTIONS HERE */

//get modal elements
var contactModal = document.getElementById('contact-modal');

//get modal Buttons
var contactModalBtn = document.getElementById('contactModalBtn');

//get close Buttons
var contactClose = document.getElementById('contactClose');

//functions to open modals
contactModalBtn.onclick = function openContactModal() {
  contactModal.style.display = 'block';
};

//functions to close modals
contactClose.onclick = function closeContactModal() {
  contactModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = 'none';
  }
};
