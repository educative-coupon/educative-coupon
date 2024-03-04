// Copied
$(".tabs .clipboard-btn").click(function () {
  $(".tabs .clipboard-btn").text("Copied!");

  $(".tabs .clipboard-btn").addClass("clipboard-btn-copied");
  $(".tabs .tab p").addClass("text-copied");
  $(".tabs .tab").addClass("tabs-background-copied");
  $(".tabs input[type='radio']:checked + label").addClass(
    "tabs-background-copied"
  );
});

// Reset Copied Effects
$('.tabs input[type="radio"]').click(function () {
  $(".tabs .clipboard-btn").text("Copy To Clipboard");

  $(".tabs .clipboard-btn").removeClass("clipboard-btn-copied");
  $(".tabs .tab p").removeClass("text-copied");
  $(".tabs .tab").removeClass("tabs-background-copied");
  $(".tabs input[type='radio'] + label").removeClass("tabs-background-copied");
});
