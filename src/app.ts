const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn")!;

submitBtn.addEventListener("click", () => {
  console.log(email.value);
});
