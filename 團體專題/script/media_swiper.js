var mySwiper = new Swiper('.media-swiper', {
    initialSlide: 0,
    observer: true, // 修改swiper自己或子元素時，自動初始化swiper
    observeParents: true, // 修改swiper的父元素時，自動初始化swiper
    direction: 'horizontal', // 垂直切換選項            
    speed: 1000, // 切換速度
    loop: true, // 循環模式選項
    

    // 滾動效果
    effect: 'coverflow', // 可設定為"fade"（淡入）"cube"（方塊）"coverflow"（3d流）"flip"（3d翻轉）
    slidesPerView: 2, // 頁面數量
    centeredSlides: true,

    coverflowEffect: {
        rotate: 0, // 滑動時旋轉角度
       

        modifier: 1, // 覆蓋疊加層數
        slideShadows : false // 是否陰影
    }
});
