function displayTab(tabId) {

    let tabContent = document.querySelectorAll(".tab-content-row");

    tabContent.forEach((a) => {
        a.style.display = 'none';
    });

    document.querySelectorAll(".tabs").forEach((b) => {
        b.classList.remove("tab-effect");
    }
    );

    let tabContentID = document.getElementById(tabId);

    tabContentID.style.display = 'flex';

    let tabButton = document.querySelector(`div[onclick="displayTab('${tabId}')"]`);
    tabButton.parentElement.classList.add("tab-effect");

}

displayTab('tab-content-2');

// SECTION-1-SLIDER

$('.section-1-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 500,
                cssEase: 'linear'
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 200,
                cssEase: 'linear'
            }
        }

    ]
});

// SHOW MORE BUTTON 
const dNone = document.querySelector(".view-more");
const showBtn = document.querySelector(".blog-load-btn");
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

$('.section-7-slider1').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    asNavFor: '.section-7-slider2',
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 500,
                cssEase: 'linear'
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 200,
                cssEase: 'linear'
            }
        }

    ]
});

$('.section-7-slider2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    asNavFor: '.section-7-slider1',
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true
});

// NAVBAR 
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