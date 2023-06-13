//打字特效
window.onload = function(){
    const texts = ['Access Control Gate.'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 3000);
    } else {
        setTimeout(type, 150);
    }
    })();

    //輪播
    
// 起始的 slide 索引
var initialSlideIndex = 2;
    var mySwiper = new Swiper('.swiper-container', {
        // loop: true,
        slidesOffsetBefore: 0, // 設定 slide 與容器左側的間距為 0
        speed: 600,
        slidesPerView: 'auto',
        loopedSlides: 0,
        centeredSlides: true,
        slideToClickedSlide: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        paginationClickable: true,
        initialSlide: initialSlideIndex
    });
    
    //動態顯現效果
    AOS.init({
        mobile: true
    });

    if ($(window).width() < 768) {
        $(".noto-sans-light").css("font-size", "12px");
        $("#menu").addClass("d-none");
    }

    window.addEventListener('scroll',function(){
        if(scrollY == 3748){
            $("#scrollcon").css("opacity", "0");
        }
        else{
            $("#scrollcon").css("opacity", "0.4");
        }
    })

}