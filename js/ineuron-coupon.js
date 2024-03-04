$(".deal-copy-icon").click(function () {
  // change icon
  $(this).attr("src", "../assets/approved-accept-icon-white.svg");
  setTimeout(() => {
    $(this).attr("src", "../assets/copy-icon.svg");
  }, 2000);

  // change color
  $(this).parent().addClass("deal-coupon-code-copied");
  setTimeout(() => {
    $(this).parent().removeClass("deal-coupon-code-copied");
  }, 2000);

  // Change Text
  var couponCodeDOM = $(this).siblings(".deal-coupon-code");
  var previousText = couponCodeDOM.text();
  couponCodeDOM.text("Copied!");
  setTimeout(() => {
    couponCodeDOM.text(previousText);
  }, 2000);
});
