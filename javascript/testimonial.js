const slides = document.querySelector(".testimonials__content--slider")
.children;
const indicatorImg = document.querySelector(
    ".testimonials__content--indicator"
).children;


for (let i = 0; i < indicatorImg.length; i++) {
    indicatorImg[i].addEventListener("click", function() {

        for (let j = 0; j < indicatorImg.length; j++) {
            indicatorImg[j].classList.remove("active");
        }
        this.classList.add("active");
        //getting the next slide
        const id = this.getAttribute("data-id");
        for (let k = 0; k < slides.length; k++) {
            slides[k].classList.remove("active");
        }
        slides[id].classList.add("active");
    });
}