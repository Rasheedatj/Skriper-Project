const loginBtn = document.querySelector(".two");
const loginForm = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  loginForm.classList.toggle("active");
});
