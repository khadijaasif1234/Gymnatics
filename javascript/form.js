const slidePage = document.querySelector(".register__content--form__page");
const firstNextBtn = document.querySelector(".next-1");

const firstPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-2");

const secondPrevBtn = document.querySelector(".prev-2");
const thirdNextbtn = document.querySelector(".next-3");

const thridPrevBtn = document.querySelector(".prev-3");
const sumbitBtn = document.querySelector(".sumbit");

const progressStep = document.querySelectorAll(".register__progress--step");


const progressNumber = document.querySelectorAll(".register__progress--step span");
const progressTick = document.querySelectorAll(".fa-check");

let max = 4;
let current = 1;

function tick(){
    progressStep[current - 1].classList.add("active");
    progressNumber[current - 1].classList.add("active");
    progressTick[current - 1].classList.add("active");
    current += 1;
}


function untick(){
    progressStep[current - 2].classList.remove("active");
    progressNumber[current - 2].classList.remove("active");
    progressTick[current - 2].classList.remove("active");
    current -= 1;
}

firstNextBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-33%";
    tick();
});
secondNextBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-100%";
    tick();
});
thirdNextbtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-200%";
    tick();
});

sumbitBtn.addEventListener("click", () => {
    tick();
    setTimeout(() => {
        alert("your form has been Successfully Sumbited, thank you friend");
        location.reload();
    }, 1000);
});


firstPrevBtn.addEventListener("click", () =>{
    slidePage.style.marginLeft = "0";
    untick();
});
secondPrevBtn.addEventListener("click", () =>{
    slidePage.style.marginLeft = "-33%";
    untick();
});
thridPrevBtn.addEventListener("click", () =>{
    slidePage.style.marginLeft = "-100%";
    untick();
});