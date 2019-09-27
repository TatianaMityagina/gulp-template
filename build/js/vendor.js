///Скролл

$(".promo-scroll").click(function () {
  var elementClick = $(this).attr("#scroll-down");
  var destination = $(elementClick).offset().top;
  $('html, body').animate({ scrollTop: destination }, 600);
  return false;
});
