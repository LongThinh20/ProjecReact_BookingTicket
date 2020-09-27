$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000').fadeIn();;
        }
        else {
            //$('.filter[filter-item="' + value + '"]').removeClass('hidden');
            //$(".filter").not('.filter[filter-item="' + value + '"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000').fadeOut();
            $('.filter').filter('.' + value).show('3000').fadeIn();

        }
    });

    // if ($(".filter-button").removeClass("active")) {
    //     $(this).removeClass("active");
    // }
    // $(this).addClass("active");
    $(".btn").each(function () {
        $(this).click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        });
    });
});