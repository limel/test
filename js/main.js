$(document).ready(function () {
  const sliderControl = $(".owl-carousel");
  sliderControl.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    smartSpeed: 1000,
    pagination: true,
    dotsClass: "pagination",
    dotClass: "pagination__item",
  });

  $(".hero__button-change--right").click(function () {
    sliderControl.trigger("next.owl.carousel");
  });

  $(".hero__button-change--left").click(function () {
    sliderControl.trigger("prev.owl.carousel");
  });
  sliderControl.on("changed.owl.carousel", function (event) {
    // console.log(event.item.count);
    console.log(event.item.index);
  });
});
