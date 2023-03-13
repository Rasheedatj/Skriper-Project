const loginBtn = document.querySelector(".two");
const loginForm = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  loginForm.classList.toggle("active");
});

let faq = document.querySelectorAll(".faq div");

faq.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("open");
  });
});
