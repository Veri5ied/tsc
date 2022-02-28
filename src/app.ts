const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn")!;
const lightBtn = document.getElementById("light")!;
const darkBtn = document.getElementById("dark")!;
const darkMode = document.getElementById("darkMode");

type ID = string;
type ISLLOADING = boolean;
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
