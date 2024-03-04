var referral_link = 'https://rebrand.ly/cndiscount';

$(document).ready(function () {
  // Show back to top button
  $(document).scroll(() => {
    var y = $(this).scrollTop();
    if (y > 200) {
      $('.back2top').fadeIn();
    } else {
      $('.back2top').fadeOut();
    }
  });

  $('.back2top').click(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // Logo Redirect to HomePage Btn
  $('#logo').on('click', e => {
    window.open('../', '_self');
  });

  // GET NOW REDIRECT
  $('#menu-cta-btn').on('click', e => {
    window.open(referral_link, '_blank');
  });

  // Hide share options names on small size
  $(window).resize(function () {
    var width = $(document).width();
    if (width > 768 && width < 900) {
      $('.share-options li a span').hide();
    }

    if (width > 900) {
      $('.share-options li a span').show();
    }
  });
  // Jquery ending
});

// Toast
function toast(msg) {
  var toastDOM = document.querySelector('.toast');
  toastDOM.textContent = msg;
  toastDOM.classList.add('show');
  setTimeout(() => {
    toastDOM.classList.remove('show');
  }, 2000);
}

// Tags redirect to blog page
tagsElements = document.querySelectorAll('.tags a');
for (let i = 0; i < tagsElements.length; i++) {
  if (tagsElements[i].href == '#')
    tagsElements[i].href =
      '/blog.html' + '?tags=' + tagsElements[i].text.trim().toLowerCase();
}
