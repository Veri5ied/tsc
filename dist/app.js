"use strict";
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");
const darkMode = document.getElementById("darkMode");
submitBtn.addEventListener("click", () => {
    console.log(email.value);
    console.log(password.value);
});
darkBtn.addEventListener("click", () => {
    darkMode === null || darkMode === void 0 ? void 0 : darkMode.classList.remove("switcher");
    darkMode === null || darkMode === void 0 ? void 0 : darkMode.classList.add("dark-theme");
});
lightBtn.addEventListener("click", () => {
    darkMode === null || darkMode === void 0 ? void 0 : darkMode.classList.remove("dark-theme");
    darkMode === null || darkMode === void 0 ? void 0 : darkMode.classList.add("switcher");
});
