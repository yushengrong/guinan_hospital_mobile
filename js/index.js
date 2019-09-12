/**
 * Created by Administrator on 2019/6/2.
 */
$(document).ready(function () {
    document.getElementsByTagName('html')[0].style.fontSize=window.screen.width/10+"px";

    //导航
    $('.header_con>a:last-of-type').on('click',function () {
       $('.header>ul').slideToggle(200);
    });

    //banner
    var swiper = new Swiper('.banner_con', {
        loop:true,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.banner_spot',
            clickable: true,
        },

    });

    //科室介绍
    $('.department>ul>li:nth-of-type(n+4)').hide();
    $('.department>a').on('click',function () {
        $('.department>ul>li:nth-of-type(n+4)').toggle(100);
        $(this).toggleClass('department_a_active');
    })

    //专家介绍
    var swiper = new Swiper('.doctor_ban', {
        slidesPerView: 2.5,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    $('.doctor>ul>li:nth-of-type(2)').css('display','none');
    $('.doctor_tab>a').on('click',function () {
        var index = $(this).index();
        $(this).addClass('doctor_tab_active').siblings().removeClass('doctor_tab_active');
        $('.doctor>ul>li').eq(index).show().siblings().hide();
    });

    //新闻资讯
    var swiper = new Swiper('.new_main_ban', {
        spaceBetween: -0.1,
        loop:true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    $('.new_list>ul:nth-of-type(n+2)').css('display','none');
    $('.new_con_tab>ul>li').on('click',function () {
        var index = $(this).index();
        $(this).addClass('new_con_tab_active').siblings().removeClass('new_con_tab_active');
        $(this).parents('.new').children('.new_list').children('ul').eq(index).fadeIn(100).siblings().fadeOut(100);
    })
});