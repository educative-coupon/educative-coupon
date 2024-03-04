var showLocalImages = true;
var isSpecialEarlyBirdLive = true;
var specialEarlyBirdDiscount = 0;
var totalDiscount = 30;
var courseInfoAPIData, specialOfferAPIData;

var async1 = $.ajax({
  url: "https://api.codingninjas.com/api/v4/course/courses_info",
  type: "GET",
  success: function (result) {
    var apiData = result["data"];
    courseInfoAPIData = apiData;
  },
});

var async2 = $.ajax({
  url: "https://api.codingninjas.com/api/v4/get_landing_offer_banner?source=landing",
  // url: "https://mocki.io/v1/fa9aaf78-af7c-4ab8-b1d3-446dd37aef49",
  type: "GET",
  success: function (result) {
    var apiData = result["data"]["offer_data"];
    specialOfferAPIData = apiData;
  },
});

$.when(async1, async2).then(() => {
  var specialEarlyBirdDiscount = courseInfoAPIData["early_bird_navbar_text"];
  specialEarlyBirdDiscount = getDiscountNumeric(specialEarlyBirdDiscount);
  totalDiscount = specialEarlyBirdDiscount + 12;
  var apiData = specialOfferAPIData;
  apiData["early_bird_discount_percentage"] = specialEarlyBirdDiscount;

  showSpecialOffers(apiData);
  hideTopNotificationOnScroll(apiData);
  topNotification(apiData);
  middleNotification(apiData);
  // only for homepage
  try {
    modifyLandingLi(apiData);
  } catch (err) {
    // Do nothing, it isn't homepage
  }
});

function getDiscountNumeric(txt) {
  var numb = txt.match(/\d/g);
  numb = numb.join("");
  return Number(numb);
}

// Show special offers
function showSpecialOffers(apiData) {
  // console.log("Showing Special Offers");
  $(".special-offer").css({ display: "unset" });
  $("#top-notification").css({ display: "flex" });
  var earlyBirdDiscount = apiData["early_bird_discount_percentage"];

  if (earlyBirdDiscount != 30) {
    $(".middle-notification-2").css({ display: "none" });
  }
}

function hideTopNotificationOnScroll(apiData) {
  var earlyBirdDiscount = apiData["early_bird_discount_percentage"];
  // hide notification banner on scroll
  $(window).scroll(function () {
    // return;
    var height = $(this).scrollTop();
    // console.log(height);
    if (height == 0) {
      // $("#top-notification").css("display", "flex");
      $("#top-notification").slideDown(250);
    } else {
      // $("#top-notification").css("display", "none");
      $("#top-notification").slideUp(250);
    }
  });
}

// top-notification
function topNotification(apiData) {
  var headingDOM = $(".top-notification-heading");
  var paragraphDOM = $(".top-notification-paragraph");
  var ctaDOM = $(".top-notification-cta");
  var validityDOM = $(".top-notification-validity");
  var earlyBirdDiscount = apiData["early_bird_discount_percentage"];

  // Paragraph
  if (earlyBirdDiscount == 30) {
    paragraph = "Get 30% Early Bird Discount + 10% Extra Discount";
  } else {
    paragraph =
      "Get <s>30%</s> " +
      earlyBirdDiscount +
      "% Early Bird Discount + 10% Extra Discount";
  }
  paragraphDOM.html(paragraph);

  // CTA
  totalDiscount = earlyBirdDiscount + 12;
  var cta = "GET " + totalDiscount + "% DISCOUNTS NOW";
  ctaDOM.text(cta);
}

function middleNotification(apiData) {
  // Add option for custom local image
  var desktopDOM = $(".middle-notification-desktop");
  var desktopImgSrc = apiData["desktop_banner"];
  var mobileDOM = $(".middle-notification-mobile");
  var mobileImgSrc = apiData["mobile_banner"];

  if (showLocalImages == true) {
    desktopDOM.attr(
      "src",
      "./assets/special-offer/" + specialEarlyBirdDiscount + "desktop.webp"
    );
    mobileDOM.attr(
      "src",
      "./assets/special-offer/" + specialEarlyBirdDiscount + "mobile.webp"
    );
  } else {
    desktopDOM.attr("src", desktopImgSrc);
    mobileDOM.attr("src", mobileImgSrc);
  }
}

function modifyLandingLi(apiData) {
  earlyBirdDOM = $(".landing-page-li-early-bird-discount");
  totalSavingsDOM = $(".landing-page-li-total-savings");
  var earlyBirdDiscount = apiData["early_bird_discount_percentage"];

  if (earlyBirdDiscount != 30) {
    var textHTML =
      "Also Get <s>30%</s> <strong> " +
      earlyBirdDiscount +
      "% </strong> Early Bird Discount.";
    earlyBirdDOM.html(textHTML);

    totalSavingsHTML = "Save around <strong>Rs 8,000</strong> on any course.";
    totalSavingsDOM.html(totalSavingsHTML);
  }
}
