// Contact
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

//Get the button:
mybutton = document.getElementById('contact-btn');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'flex';
  } else {
    mybutton.style.display = 'none';
  }
}
