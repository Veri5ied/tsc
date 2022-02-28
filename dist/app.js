"use strict";
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {
    console.log(email.value);
});
