$(function () {
    $('.search > input').focus(function () {
        $('.search').animate({
            width: "218px",
        }, 1000)
        $('.listbox_new').show(800);
    });
    $('.search > input').focusout(function () {
        $('.search').animate({
            width: "90px",
        }, 1000)
        $('.listbox_new').hide(800);
    });

    $('.wx-menu').mouseenter(function () {
        $('.menulist_box').slideDown(200);
    });
    $('.menulist_box').mouseleave(function () {
        $('.menulist_box').slideUp(200);
    });

    function slip(a, b) {
        $(a).mouseenter(function () {
            $(b).stop().animate({
                left: '-77px',
            }, 555)
        });
        $(a).mouseleave(function () {
            $(b).stop().animate({
                left: '35px',
            }, 555)
        })
    };
    slip('.collect', '.col-floor');
    slip('.spoor', '.spo-floor');
    slip('.home', '.hom-floor');
    slip('.sale', '.sale-floor');
    slip('.feedback', '.fee-floor');

    var main = $('.tws-nav');
    var mainTop = main.offset().top;


    document.addEventListener('scroll', function () {
        if ($(document).scrollTop() >= mainTop) {
            $('.wx-broadside').show();
            $('.wx-gotop').show();
        } else {
            $('.wx-broadside').hide();
            $('.wx-gotop').hide();
        }
    });
    $('.gotop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 555);
    })

})
