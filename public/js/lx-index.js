$(function() {

    //点击按钮切换智慧场景
    var n = 0;
    $("#arr_l").hide()
    $("#arr_r").click(function() {

        n++;
        console.log(n);
        $(".time1").eq(n).addClass("current").siblings().removeClass("current");
        if (n > 0) {
            $("#arr_l").show("slow")
        }
        if (n >= $(".time1").length - 1) {
            n = $(".time1").length - 1
            $(this).hide("slow")
        }
        $("#videolist").stop().animate({
            left: -$("#videolist>li").eq(n).width() * n
        }, 1000)


    })

    $("#arr_l").click(function() {
            n--;
            $(".time1").eq(n).addClass("current").siblings().removeClass("current");
            if (n < $(".time1").length - 1) {
                $("#arr_r").show("slow")
            }
            if (n <= 0) {
                n = 0;
                $(this).hide("slow");
            }
            $("#videolist").stop().animate({
                left: -$("#videolist>li").eq(n).width() * n
            }, 1000)

        })
        //视频轮播区域
    var videos = document.getElementById("hiddenBox").querySelectorAll("video")
    $("#videolist").width($("#videolist>li").width() * $("#videolist>li").length);
    $("#video-btn").on("click", function() {
        $("#hiddenBox").show(200);
        $(".hiddenV").eq(n).show().siblings(".hiddenV").hide();
    })
    $("#close-btn").on("click", function() {
            videos[n].pause();
            videos[n].currentTime = 0;
            $("#hiddenBox").hide()


        })
        //封装缓动动画
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            obj.style.left = obj.offsetLeft + step + 'px';

        }, 15);
    }
    //手风琴
    $(".voice_2 ul li").each(function() {
        var fold = $(this).find(".fold");
        var unfold = $(this).find(".unfold");
        if (fold.is(":hidden")) {
            $(this).width(680);
            $(this).css({ "background": "none" })
        } else {
            $(this).width(125);
            $(this).css({ "background": "" })
        }
    })
    $(".voice_2 ul li").click(function() {
            var li_index = $(this).index();
            $(this).animate({ width: 680 }, 500);
            $(this).find(".unfold").show();
            $(this).find(".fold").hide();
            $(this).css({ "background": "none" }, 500)
            $(this).siblings().animate({ width: 125 }, 500);
            $(this).siblings().find(".unfold").hide();
            $(this).siblings().find(".fold").show();
            $(this).siblings().css({ "background": "" }, 500)
        })
        //轮播图2
    var SliderModule = (function() {
        var pb = {};
        pb.el = $('#slider');
        pb.items = {
                panel: pb.el.find('li')
            }
            // Variables Necesarias
        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panel.length;
        // Initialize
        pb.init = function(settings) {
            this.settings = settings || { duration: 8000 }
            var output = '';
            // Activamos nuestro slider
            SliderInit();
            for (var i = 0; i < lengthSlider; i++) {
                if (i == 0) {
                    output += '<li class="active"></li>';
                } else {
                    output += '<li></li>';
                }
            }
            // Controles del Slider
            $('#slider-controls').html(output).on('click', 'li', function(e) {
                var $this = $(this);
                if (currentSlider !== $this.index()) {
                    changePanel($this.index());
                };
            });
        }
        var SliderInit = function() {
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }
        pb.startSlider = function() {
                var panels = pb.items.panel,
                    controls = $('#slider-controls li');
                if (nextSlider >= lengthSlider) {
                    nextSlider = 0;
                    currentSlider = lengthSlider - 1;
                }
                // Efectos
                controls.removeClass('active').eq(nextSlider).addClass('active');
                panels.eq(currentSlider).fadeOut('slow');
                panels.eq(nextSlider).fadeIn('slow');
                // Actualizamos nuestros datos
                currentSlider = nextSlider;
                nextSlider += 1;
            }
            // Funcion para controles del slider
        var changePanel = function(id) {
            clearInterval(SliderInterval);
            var panels = pb.items.panel,
                controls = $('#slider-controls li');
            // Comprobamos el ID
            if (id >= lengthSlider) {
                id = 0;
            } else if (id < 0) {
                id = lengthSlider - 1;
            }
            // Efectos
            controls.removeClass('active').eq(id).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(id).fadeIn('slow');
            // Actualizamos nuestros datos
            currentSlider = id;
            nextSlider = id + 1;

            // Reactivamos el slider
            SliderInit();
        }
        return pb;
    }());
    SliderModule.init({ duration: 6000 });

    //回到顶部
    $("#top").on("click",function(){
        $("body, html").stop().animate({
            scrollTop: 0
        },500);
    })

})