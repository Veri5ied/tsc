const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn")!;
const lightBtn = document.getElementById("light")!;
const darkBtn = document.getElementById("dark")!;
const darkMode = document.getElementById("darkMode");

submitBtn.addEventListener("click", () => {
  console.log(email.value);
  console.log(password.value);
});

darkBtn.addEventListener("click", () => {
  darkMode?.classList.remove("switcher");
  darkMode?.classList.add("dark-theme");
});

lightBtn.addEventListener("click", () => {
  darkMode?.classList.remove("dark-theme");
  darkMode?.classList.add("switcher");
});
