

/* to make the image slide only when the user clicks on next or previous btn start */
$('#CarouselTest').carousel({ interval: false }).on('slide.bs.carousel', function (e) {
  if (e.direction === "left") {
    $(this).carousel('pause');
  }
});

$('#CarouselTest2').carousel({ interval: false }).on('slide.bs.carousel', function (e) {
  if (e.direction === "left") {
    $(this).carousel('pause');
  }
});

$('#CarouselTest3').carousel({ interval: false }).on('slide.bs.carousel', function (e) {
  if (e.direction === "left") {
    $(this).carousel('pause');
  }
});

$('#CarouselTest4').carousel({ interval: false }).on('slide.bs.carousel', function () {
  $(this).off('slide.bs.carousel');
  $(this).carousel('pause');
});

$('#CarouselTest5').carousel({ interval: false }).on('slide.bs.carousel', function () {
  $(this).off('slide.bs.carousel');
  $(this).carousel('pause');
});

$('#CarouselTest6').carousel({ interval: false }).on('slide.bs.carousel', function () {
  $(this).off('slide.bs.carousel');
  $(this).carousel('pause');
});

$('#CarouselTest7').carousel({ interval: false }).on('slide.bs.carousel', function () {
  $(this).off('slide.bs.carousel');
  $(this).carousel('pause');
});

$('#CarouselTest8').carousel({ interval: false }).on('slide.bs.carousel', function () {
  $(this).off('slide.bs.carousel');
  $(this).carousel('pause');
});

$('#CarouselTest9').carousel({ interval: false }).on('slide.bs.carousel', function () {
  $(this).off('slide.bs.carousel');
  $(this).carousel('pause');
});

$('#CarouselTest10').carousel({
  interval: false
});
// Slide the carousel manually
$('#CarouselTest10').on('slide.bs.carousel', function (e) {
  $(this).carousel('pause');
});
/* to make the image slide only when the user clicks on next or previous btn end */