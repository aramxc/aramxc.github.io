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
var projectsModal = document.getElementById('projects-modal');
var aboutModal = document.getElementById('about-modal');

//get modal Buttons
var contactModalBtn = document.getElementById('contactModalBtn');
var projectsModalBtn = document.getElementById('projectsModalBtn');
var aboutModalBtn = document.getElementById('aboutModalBtn');

//get close Buttons
var contactClose = document.getElementById('contactClose');
var projectsClose = document.getElementById('projectsClose');
var aboutClose = document.getElementById('aboutClose');

//functions to open modals
contactModalBtn.onclick = function openContactModal() {
  contactModal.style.display = 'block';
};

projectsModalBtn.onclick = function openProjectsModal() {
  projectsModal.style.display = 'block';
};

aboutModalBtn.onclick = function openAboutModal() {
  aboutModal.style.display = 'block';
};

//functions to close modal
contactClose.onclick = function closeContactModal() {
  contactModal.style.display = 'none';
};

projectsClose.onclick = function closeProjectsModal() {
  projectsModal.style.display = 'none';
};

aboutClose.onclick = function closeAboutModal() {
  aboutModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = 'none';
  } else if (event.target == projectsModal) {
    projectsModal.style.display = 'none';
  } else if (event.target == aboutModal) {
    aboutModal.style.display = 'none';
  }
};
