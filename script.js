// console.log('this is a test');

$(document).ready(function(){
    $('.cards-group').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: false,
    });
    var filtered = false;

    $('.js-filter').on('click', function(){
    if (filtered === false) {
        $('.cards-group').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.cards-group').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
    });

    $('.cards-group-tablet').slick();
      
});
