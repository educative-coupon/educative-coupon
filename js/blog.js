$(document).ready(function () {
  // Text-Ellipsis
  function addDots() {
    $('.main-single-details p').each(function (index) {
      var txt = $(this).text();
      txt.substr(0, 200);
      $(this).text(txt + '...');
    });
  }
  addDots();

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

  // Jquery ending
});

// Change View
function changeView(sectionIndex, viewIndex) {
  var sectionClassName = '';
  var viewName = '';
  switch (sectionIndex) {
    case 1:
      sectionClassName = '.latest';
      break;

    case 2:
      sectionClassName = '.reviews';
      break;

    case 3:
      sectionClassName = '.offers';
      break;

    case 4:
      sectionClassName = '.misc';
      break;

    case 5:
      sectionClassName = '.courses';
      break;
  }

  switch (viewIndex) {
    case 1:
      viewName = 'grid-view';
      break;

    case 2:
      viewName = 'big-list-view';
      break;

    case 3:
      viewName = 'small-list-view';
      break;
  }

  // Change icon classes
  $(sectionClassName + ' li').removeClass();
  var viewClassName = sectionClassName + ' li:nth-child(' + viewIndex + ')';
  $(viewClassName).attr('class', 'heading-view-active');

  // Change View
  $(sectionClassName + ' main').removeClass();
  $(sectionClassName + ' main').attr('class', viewName);
}

// On View Change Change Layour
$(window).resize(() => {
  // FIXME: Automatically Calling On changing view in mobile?
  if ($(window).width() < 768) {
    // $(".heading-view-options-cntr li:nth-child(2)").trigger("click");
  } else {
    // $(".heading-view-options-cntr li:nth-child(1)").trigger("click");
  }
});

// Add animation in trend section
if ($(window).width() < 768) {
  $('.trend li.paragraph').attr('data-aos', 'fade-up');
  $('.trend .section-heading-cntr').attr('data-aos', 'fade-up');
}

// Change View in mobile
if ($(window).width() < 768) {
  $('.heading-view-options-cntr li:nth-child(2)').click();
}

if ($('#image-slider-blog').length) {
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider-blog', {
      perPage: 1,
      rewind: true,
      width: '100%',
      height: 430,
      arrows: true,
      gap: 10,
      autoplay: true,
      interval: 4000,
      resetProgress: false,
      keyboard: 'focused',

      breakpoints: {
        768: {
          perPage: 1,
          width: '100%',
          height: 245,
        },
      },
    }).mount();
  });
}
