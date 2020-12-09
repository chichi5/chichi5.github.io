// Swiper JS 
var mp_swiper = new Swiper('.menu-swiper', {

    // slidesPerView: 1,
    //自動播放
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    //箭頭
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //點點
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    // 無限輪播 1代表顯示一張
    slidesPerView: 1,
    loop: true,
});