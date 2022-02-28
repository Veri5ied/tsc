const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn")!;
const lightBtn = document.getElementById("light")!;
const darkBtn = document.getElementById("dark")!;
const darkMode = document.getElementById("darkMode");

type ID = string;
type ISLOADING = boolean;
type DEPARTMENT = string;
type COUNTONE = number;
type COUNTTWO = number;
interface Students {
  name: string;
  reg: string;
  hasPaidFees: boolean;
  isPresent: boolean;
  gender: string;
  grade: number;
}

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

const objectProperties: {
  name: string;
  age: number;
  isWorking: boolean;
  id?: ID;
} = {
  name: "Alvin",
  age: 32,
  isWorking: true,
  id: Math.random().toString(16),
};

const download = objectProperties.isWorking;
const ident = objectProperties.id;
console.log(download);
console.log(ident);

const StudentObj: Students = {
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
} else {
  console.log(
    `${StudentObj.name} is missing a point 5 from grade: ${StudentObj.grade}`
  );
}

let department: DEPARTMENT;
department = "Computer Science";

const levels: Array<string> = ["100lvl", "200lvl", "300lvl", "400lvl"];
console.log(
  `${StudentObj.name} whose grade is ${StudentObj.grade} is in ${department}, ${levels[2]}`
);

function addNumbers(num1: COUNTONE, num2: COUNTTWO) {
  return num1 + num2;
}

console.log(addNumbers(21, 10));

const decrementNumbers = (num1: COUNTONE, num2: COUNTTWO) => num1 - num2;
console.log(decrementNumbers(100, 90));

function getObjects<T>(obj: T) {
  return {
    ...obj,
    id: Math.random().toString(16),
  };
}

const objects = {
  item: "Book",
};

console.log(getObjects(objects));

const addTwoStrings = <T>(strs: T) => {
  return {
    ...strs,
    id: Math.random().toString(16),
  };
};

const stri = {
  one: "Hello",
  two: "World",
};

console.log(addTwoStrings(stri));
