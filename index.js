const workPage = document.querySelectorAll(".experience-link");
const workHeader = document.getElementById("experience-header");
const workDate = document.getElementById("experience-date");
const workText = document.getElementById("experience-text");
console.log(workPage);

workPage.forEach((work) => {
  work.addEventListener("click", (e) => {
    workPage.forEach((workPlace) => {
        workPlace.classList.remove("border-active");
    })
    e.target.classList.add("border-active");
  });
});
