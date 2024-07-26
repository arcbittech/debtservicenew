jQuery(document).ready(function($) {
    "use strict";

    // ______________ RESPONSIVE MENU
    $('#navigation').superfish({
        delay: 300,
        animation: {
            opacity: 'show',
            height: 'show'
        },
        speed: 'fast',
        dropShadows: false
    });

    $(function() {
        $('#navigation').slicknav({
            label: "MENU",
            closedSymbol: "&#8594;",
            openedSymbol: "&#8595;"
        });
    });

    // ______________ FIXED MENU AT SCROLL

    var nav = $('.header-navigation');
    if ($(window).width() > 767) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                nav.addClass("f-nav fadeindown");
            } else {
                nav.removeClass("f-nav fadeindown");
            }
        });
    }


    // ______________ ANIMATE EFFECTS
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false
    });
    wow.init();

    // ______________ SEARCH FORM OVERLAY
    $(function() {
        $('a[href="#search"]').on('click', function(event) {
            event.preventDefault();
            $('#search').addClass('open');
            $('#search > form > input[type="search"]').focus();
        });

        $('#search, #search button.close').on('click keyup', function(event) {
            if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                $(this).removeClass('open');
            }
        });
    });

    // ______________ TOOLTIPS
    $('[data-toggle="tooltip"]').tooltip();

    // ______________ ACCORDION ICONS
    $('.collapse').on('show.bs.collapse', function() {
        var i = $(this).parent().find('i')
        i.toggleClass('fa-plus-square-o fa-minus-square-o');
    }).on('hide.bs.collapse', function() {
        var i = $(this).parent().find('i')
        i.toggleClass('fa-minus-square-o fa-plus-square-o');
    });

    // ______________ BACK TO TOP BUTTON
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });
    $('#back-to-top').on('click', function(event) {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});