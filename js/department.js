/**
 * Created by Administrator on 2019/6/4.
 */
$(document).ready(function () {
    document.getElementsByTagName('html')[0].style.fontSize=window.screen.width/10+"px";

    //导航
    $('.header_con>a:last-of-type').on('click',function () {
        $('.header>ul').slideToggle(200);
    });

    //找医生
    $('.department>ul>li:nth-of-type(n+5)').hide();
    $('.department>a').on('click',function () {
        $('.department>ul>li:nth-of-type(n+5)').toggle(100);
        $(this).children('i').toggleClass('department_i_tf');
    });

    $('.doctor_con>a').on('click',function () {
        $(this).children('i').toggleClass('department_i_tf');
    })
});
