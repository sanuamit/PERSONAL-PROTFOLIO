$(document).ready(function () {
  // Toggle the navigation menu icon and the mobile navbar
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Reset navigation menu icon and mobile navbar on scroll and load
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
  });

  // Filter the portfolio items based on the selected category
  $(".portfolio .button-container .btn").click(function () {
    let filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".portfolio .image-container .box").show("400");
    } else {
      $(".portfolio .image-container .box")
        .not("." + filter)
        .hide("200");
      $(".portfolio .image-container .box")
        .filter("." + filter)
        .show("400");
    }
  });

  // Initialize the text color based on the initial theme state
  let isTextWhite = $("body").hasClass("dark-theme");

  // Toggle between light and dark themes
  $("#theme-toggler").click(function () {
    $(this).toggleClass("fa-sun");
    $("body").toggleClass("dark-theme");

    // Determine the new text color based on the background color
    isTextWhite = !isTextWhite;
    const newTextColor = isTextWhite ? "#fff" : "#070807";
    $("#bio").css("color", newTextColor);
  });

  // Apply the initial text color
  const initialTextColor = isTextWhite ? "#fff" : "#070807";
  $("#bio").css("color", initialTextColor);

  // Smooth scrolling to anchor links
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
