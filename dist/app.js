"use strict";
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");
const darkMode = document.getElementById("darkMode");
var SchoolProgress;
(function (SchoolProgress) {
    SchoolProgress[SchoolProgress["present"] = 0] = "present";
    SchoolProgress[SchoolProgress["absent"] = 1] = "absent";
    SchoolProgress[SchoolProgress["working"] = 2] = "working";
    SchoolProgress[SchoolProgress["sleeping"] = 3] = "sleeping";
    SchoolProgress[SchoolProgress["playing"] = 4] = "playing";
})(SchoolProgress || (SchoolProgress = {}));
console.log(SchoolProgress.present);
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
const objectProperties = {
    name: "Alvin",
    age: 32,
    isWorking: true,
    id: Math.random().toString(16),
};
const download = objectProperties.isWorking;
const ident = objectProperties.id;
console.log(download);
console.log(ident);
const StudentObj = {
    name: "Patrick",
    reg: Math.random().toString(16),
    hasPaidFees: true,
    isPresent: true,
    gender: "Male",
    grade: 90,
};
console.log(StudentObj.name);
console.log(StudentObj.reg);
console.log(StudentObj.hasPaidFees);
console.log(StudentObj.isPresent);
console.log(StudentObj.gender);
console.log(StudentObj.grade);
if (StudentObj.isPresent) {
    console.log("10 points given for being present");
}
else {
    console.log(`${StudentObj.name} is missing a point 5 from grade: ${StudentObj.grade}`);
}
let department;
department = "Computer Science";
const levels = ["100lvl", "200lvl", "300lvl", "400lvl"];
console.log(`${StudentObj.name} whose grade is ${StudentObj.grade} is in ${department}, ${levels[2]}`);
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(21, 10));
const decrementNumbers = (num1, num2) => num1 - num2;
console.log(decrementNumbers(100, 90));
function getObjects(obj) {
    return Object.assign(Object.assign({}, obj), { id: Math.random().toString(16) });
}
const objects = {
    item: "Book",
};
console.log(getObjects(objects));
const addTwoStrings = (strs) => {
    return Object.assign(Object.assign({}, strs), { id: Math.random().toString(16) });
};
const stri = {
    one: "Hello",
    two: "World",
};
console.log(addTwoStrings(stri));
