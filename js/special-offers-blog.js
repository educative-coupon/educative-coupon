// In case of i have modified the coding ninjas banner like adding extra 10% off
var showLocalImages = false;
var imgExtension = ".webp";
// This sections ends here

$.ajax({
  url: "https://api.codingninjas.com/api/v4/course/course_plans?title=c-plus-plus-data-structures-and-algorithms",
  type: "GET",
  success: function (result) {
    try {
      var maxDiscount = result["data"]["maximum_available_discount"];

      if (maxDiscount >= 30) {
        // New Offer!
        DoTheOfferPromotion(maxDiscount);
      }
    } catch (err) {
      console.log(err);
      console.log("No specials offers");
    }
  },
  error: function (error) {
    return;
  },
});

function DoTheOfferPromotion(maxDiscount) {
  $.ajax({
    url: "https://api.codingninjas.com/api/v4/get_landing_offer_banner?source=landing",
    // url: "https://mocki.io/v1/fa9aaf78-af7c-4ab8-b1d3-446dd37aef49",
    type: "GET",
    success: function (result) {
      try {
        showSpecialOffers(maxDiscount);
        hideTopNotificationOnScroll(maxDiscount);

        var apiData = result["data"]["offer_data"];
        var earlyBirdDiscount = maxDiscount;
        apiData["early_bird_discount_percentage"] = maxDiscount;

        topNotification(maxDiscount);
        middleNotification(apiData);
      } catch (err) {
        // No new offers
        console.log(err);
        console.log("No specials offers");
      }
    },
    error: function (error) {
      return;
    },
  });
}

// Show special offers
function showSpecialOffers(maxDiscount) {
  // console.log("Showing Special Offers");
  $(".special-offer").css({ display: "unset" });
  $("#top-notification").css({ display: "flex" });
  var earlyBirdDiscount = maxDiscount;
}

function hideTopNotificationOnScroll(maxDiscount) {
  var earlyBirdDiscount = maxDiscount;
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
function topNotification(maxDiscount) {
  var headingDOM = $(".top-notification-heading");
  var paragraphDOM = $(".top-notification-paragraph");
  var ctaDOM = $(".top-notification-cta");
  var validityDOM = $(".top-notification-validity");
  var earlyBirdDiscount = maxDiscount;

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
  var desktopImgSrc = apiData["desktop_banner_url"];
  var mobileDOM = $(".middle-notification-mobile");
  var mobileImgSrc = apiData["mobile_banner_url"];
  var earlyBirdDiscount = apiData["early_bird_discount_percentage"];

  // Sirf 30% ke liye special banner dikha rhe h jo locally saved h
  if (showLocalImages == true || earlyBirdDiscount <= 30) {
    desktopDOM.attr("src", "../assets/special-offer/desktop" + imgExtension);
    mobileDOM.attr("src", "../assets/special-offer/mobile" + imgExtension);
  } else {
    desktopDOM.attr("src", desktopImgSrc);
    mobileDOM.attr("src", mobileImgSrc);
  }
}
