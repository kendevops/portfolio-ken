$(document).ready(function() {
  $(".menu-toggler").on("click", function() {
    $(".menu-toggler").toggleClass("open");
    $(".top-nav").toggleClass("open");
  });
});
