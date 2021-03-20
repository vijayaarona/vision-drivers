// Intro carousel
var introCarousel = $(".carousel");
var introCarouselIndicators = $(".carousel-indicators");
introCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    (index === 0) ?
        introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
        introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
});

introCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
});