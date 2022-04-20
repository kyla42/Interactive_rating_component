const btn = document.querySelectorAll(".btn");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const rating = document.querySelector(".rating");
const rated = document.querySelector(".rated");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        for (let j = 0; j < btn.length; j++) {
            btn[j].classList.remove("active");
        }
        btn[i].classList.add("active");
        result.innerHTML = i + 1;
        submit.disabled = false;
    })
}

submit.addEventListener("click", function () {
    rating.classList.add("submitted");
    rated.classList.add("submitted");
})