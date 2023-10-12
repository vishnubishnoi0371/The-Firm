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