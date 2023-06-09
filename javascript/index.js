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
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
            slidesPerView: 3,
            },
            1024: {
            slidesPerView: 4,
            },
        },
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