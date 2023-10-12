const dNone = document.querySelector(".load-more");
const showBtn = document.querySelector(".LM-btn");
let flag = 0 

showBtn.addEventListener("click", () => {
    dNone.classList.toggle("d-block")
    if (flag == 0) {
        showBtn.innerHTML = "Show Less"; flag++
    }
    else {
        showBtn.innerHTML = "Load More"; flag--
    }
})

let label = document.querySelector(".label");
let menu = document.querySelector("#menu");
let open = 0;
let aTags = document.querySelectorAll("#menu li a");

aTags.forEach((c) => {
    c.addEventListener("click", () => {
        if (open != 0) {
            menu.style.right = '-100%';
            document.body.classList.remove("overflow-y-hidden");
            label.classList.remove("label-switch");
            open--;
        }
    })
})

label.addEventListener("click", () => {
    if (open == 0) {
        menu.style.right = 0;
        document.body.classList.add("overflow-y-hidden");
        label.classList.add("label-switch");
        open++;
    }

    else {
        menu.style.right = '-100%';
        document.body.classList.remove("overflow-y-hidden");
        label.classList.remove("label-switch");
        open--;
    }
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.style.display = "flex";
    }
    else {
        toTop.style.display = "none";
    }
});

$('.section-2-slider1').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    asNavFor: '.section-2-slider2',
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
});

$('.section-2-slider2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    asNavFor: '.section-2-slider1',
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true
});
