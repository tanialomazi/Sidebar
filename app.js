//SIDEBAR

const btn = document.querySelector(".btn");
const aside = document.querySelector(".aside");
const closeBtn = document.querySelector(".close-btn")

btn.addEventListener("click", function () {
    //if (aside.classList.contains("show-aside")) {
    //    aside.classList.remove("show-aside");
    //} else {
    //    aside.classList.add("show-aside");
    //}

    aside.classList.toggle("show-aside");
})


closeBtn.addEventListener("click", function () {
    aside.classList.remove("show-aside");
})
