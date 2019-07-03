$(function () {
    // $('.tws-ico-1').mouseenter(function () {
    //     $('.tws-ico-1').addClass('tws-cur-1')
    //     }
    // )
    var index;
    // 精灵图TAB栏鼠标进过事件
    $('.tws-nav ul li').each(function(i,ele){
        $(ele).mouseenter(function () {
            $(this).siblings().removeClass('tws-cur-0 tws-cur-1 tws-cur-2 tws-cur-3 tws-cur-4 tws-cur-5 tws-cur-6')
            $(this).addClass('tws-cur-'+i);
            index = i;
            $('.tws-nav_botton').css('display','none');
            $('.tws-navAdd-'+index).css('display','block');
            }
        )
    })
    // 榜单TAB栏点击事件
    $('#tws-jd-tab li').click(function(){
        $(this).siblings('li').css({
            'backgroundColor':'',
            'color':''
        })
        $(this).css({
            'backgroundColor':'#32beff',
            'color':'#fff'
        })
    })
    // 榜单鼠标经过事件
    $('.ranking').mouseenter(function(){
        $(this).css({
            height:35,
            backgroundColor:$(this).children('.paihang_l').css('backgroundColor'),
        })
        $(this).children('.paihang_l').css({
            width:35,
            height:35,
            marginRight:15+'px',
            lineHeight: 35+'px',
            color:$(this).css('backgroundColor'),
            backgroundColor:'#fff',
        })
        $(this).children('.paihang_r').children().css('color','#fff');
        $(this).children('.paihang_r').children('p').css('display','block');
    })
    $('.ranking').mouseleave(function(){
        $(this).children('.paihang_l').css({
            width:23,
            height:23,
            lineHeight: 23+'px',
            marginRight:'',
            backgroundColor:'',
            color:'',
        })
        $(this).css({
            height:23,
            backgroundColor:'',
        })
        $(this).children('.paihang_r').children().css('color','');
        $(this).children('.paihang_r').children('p').css('display','none');

    })
})