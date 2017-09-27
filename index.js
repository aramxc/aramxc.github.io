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

// Get contact overlay
var contactModal = getElementById('contact-overlay');

//Get contact overlay link
var contactLink = getElementById('overlayLink');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the link, open the modal
function openContactForm() {
  contactModal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  contactModal.style.display = 'none';
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
      contactModal.style.display = 'none';
    }
  };
