$(function() {
    $('.choice').mouseenter(function() {
        $(this).children('li').stop().fadeIn()
    })
    $('.choice').mouseleave(function() {
        $(this).children('li').stop().fadeOut()
    });

    //滑动导航开始
    var boxTop = $('.main_search').offset().top;
    $(window).scroll(function() {
        if ($(document).scrollTop() > boxTop) {
            $('.main_search').addClass('fixed w');
        } else {
            $('.main_search').removeClass('fixed w');
        }
    });
    //下拉导航
    $('.main_search .openmenu').mouseenter(function() {
            $('.search_box').css('display', 'block')
        }).mouseleave(function() {
            $('.search_box').css('display', 'none')
        })
        //导航变色
    $(".openmenu_tab").mouseenter(function() {
        $(this).children('a').children('i').css('background-positionX', '-114px').siblings('span').css('color', '#87CEEB');
        $(this).siblings().children('a').children('i').css('background-positionX', '-77px').siblings('span').css('color', '#666');
    }).mouseleave(function() {
        $(this).children('a').children('i').css('background-positionX', '-77px').siblings('span').css('color', '#666');
    })

    //筛选菜单

    $('.btn_show').click(function() {
        $('.row_item_none').show();
        $('.btn_show').hide();
        $('.btn_hidden').removeClass('none');
    })
    $('.btn_hidden').click(function() {
            $('.row_item_none').hide();
            $('.btn_show').show();
            $('.btn_hidden').addClass('none');
        })
        //排行榜
    $('.rankinglist_ul').children('li').mouseenter(function() {
            $(this).children('a').children('.rankingImg').removeClass('none')
            $(this).children('a').children('.rankingN').children('.rannkingP').removeClass('none')
            $(this).children('a').children('.rankingNom').addClass('none');
            $(this).css({ background: $(this).children('a').children('.rankingNom').css('background') });
            $(this).siblings().css('background', '#fff');
        }).mouseleave(function() {
            $(this).children('a').children('.rankingImg').addClass('none')
            $(this).children('a').children('.rankingN').children('.rannkingP').addClass('none')
            $(this).children('a').children('.rankingNom').removeClass('none');
            $(this).css('background', '#fff');
        })
        //侧边栏
    var main = $('.content_body');
    var mainTop = main.offset().top;


    document.addEventListener('scroll', function() {
        if ($(document).scrollTop() >= mainTop) {
            $('.wx-gotop').show();
        } else {
            $('.wx-gotop').hide();
        }
    });
    $('.gotop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 555);
    })

})