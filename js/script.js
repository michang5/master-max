$(function () {
    $(document).ready(function () {
        var slider = $('#lightSlider').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 9
        });

        // Center Modal Window
        $('.modal').css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            margin: '-' + ($('.modal').height() / 2) + 'px 0 0 -' + ($('.modal').width() / 2) + 'px'
        });

        // Triggle
        $('#triggle').click(function (e) {
            e.preventDefault();
            $('.modal').fadeIn(400);
            $('.overlay').fadeIn(400);
            slider.refresh();
        });

        // Close Modal Windwo
        $('a.close').click(function (e) {
            e.preventDefault();
            $('.modal').fadeOut(800);
            $('.overlay').fadeOut(800);
        });

    });

    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9
    });

    // external js: masonry.pkgd.js, imagesloaded.pkgd.js

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

});