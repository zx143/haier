//监听页面加载完成再执行js文件
window.addEventListener('load', function () {
    //轮播图
    (function () {
        //获取元素
        var focus = document.querySelector('.focus');
        var arr_l = document.querySelector('.arrow-l');
        var arr_r = document.querySelector('.arrow-r');
        var ul = focus.querySelector('ul'); //动画是ul移动
        var focusWidth = focus.offsetWidth; //移动的距离

        //1.鼠标经过显示隐藏左右按钮
        //鼠标经过显示
        focus.addEventListener('mouseenter', function () {
            // arr_l.style.display = 'block';
            // arr_r.style.display = 'block';
            //清除定时器
            clearInterval(timer);
            timer = null;
        });
        //鼠标离开隐藏
        focus.addEventListener('mouseleave', function () {
            arr_l.style.display = 'none';
            arr_r.style.display = 'none';
            //开启定时器
            timer = setInterval(function () {
                arr_r.click();
            }, 2000)
        });

        // 2.动态创建小圆点并且设置点击切换图片事件
        //获取ol
        var ol = focus.querySelector('.circle');
        for (var i = 0; i < ul.children.length; i++) {
            //创建节点
            var li = document.createElement('li');
            //添加节点
            ol.appendChild(li);
            //添加自定义索引
            li.setAttribute('index', i);
            //设置点击事件
            li.addEventListener('click', function () {
                //排他思想
                for (var i = 0; i < ol.children.length; i++) {
                    //清除所有样式
                    ol.children[i].className = '';
                }
                //留下自己
                this.className = 'current';
                //获取当前index 
                var index = this.getAttribute('index');
                num = circle = index;
                //点击切换图片
                animate(ul, -index * focusWidth)
            })
        }
        //设置小圆点当前的current
        ol.children[0].className = 'current';
        //克隆第一个li 放到最后一个位置
        var lis = ul.children[0].cloneNode(true);
        ul.appendChild(lis);
        //控制小圆点
        var circle = 0;
        //封装current排他思想
        function getCurrent() {
            //排他思想
            for (var i = 0; i < ol.children.length; i++) {
                //清除所有样式
                ol.children[i].className = '';
            }
            //留下自己
            ol.children[circle].className = 'current';
        }
        //左右按钮计数器
        var num = 0;
        //节流阀
        var flag = true;
        // 3.点击右边按钮切换图片,无缝连接
        arr_r.addEventListener('click', function () {
            if (flag) {
                flag = false;
                //判断无缝连接
                if (num == ul.children.length - 1) {
                    num = 0; //回到第一张图片的索引号
                    ul.style.left = 0; //回到第一张图片的位置
                }
                num++; //每次点击自增一
                //调用动画
                animate(ul, -num * focusWidth, function () {
                    flag = true;
                });
                //小圆点
                circle++;
                //小圆点重置判断
                //console.log(circle);
                if (circle == ol.children.length) {
                    circle = 0;
                };
                //调用current排他思想函数
                getCurrent();
            }
        })
        //右边按钮
        // 3.点击右边按钮切换图片,无缝连接
        arr_l.addEventListener('click', function () {
            if (flag) {
                flag = false;
                //判断无缝连接
                if (num == 0) {
                    num = ul.children.length - 1; //回到最后一张图片的索引号
                    ul.style.left = -num * focusWidth + 'px'; //回到最后一张图片的位置
                }
                num--; //每次点击自减一
                //调用动画
                animate(ul, -num * focusWidth, function () {
                    flag = true;
                });
                //小圆点
                circle--;
                //小圆点重置判断
                if (circle < 0) {
                    circle = ol.children.length - 1;
                };
                //调用current排他思想函数
                getCurrent();
            }
        })
        //自动播放轮播图
        var timer = setInterval(function () {
            arr_r.click();
        }, 3000)
    })();

    //juery入口函数
    $(function () {
        //tab栏切换
        $('.sub_nav li').click(function () {
            $(this).children().addClass('sub_current').parent().siblings().children().removeClass('sub_current');
            const index = $(this).index();
            $('.mian_box_left  .main_slide').eq(index).show().siblings().hide();
        });
        //返回顶部
        (function () {
            document.addEventListener('scroll', function () {
                var vsTop = $(".main").offset().top;
                if ($(document).scrollTop() >= vsTop) {
                    $('.asd_db').fadeIn();
                } else {
                    $('.asd_db').fadeOut();
                }
            });
            $('.asd_db').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 666);
            })
        })();
    });
});