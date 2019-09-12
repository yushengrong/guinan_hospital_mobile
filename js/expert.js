/**
 * Created by Administrator on 2019/6/5.
 */
$(document).ready(function () {
    document.getElementsByTagName('html')[0].style.fontSize=window.screen.width/10+"px";

    //导航
    $('.header_con>a:last-of-type').on('click',function () {
        $('.header>ul').slideToggle(200);
    });

    //banner
    var swiper = new Swiper('.swiper-container', {
        loop:true,
        centeredSlides: true,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
