interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: Person;

user = {
  name: "Alvin",
  age: 30,

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user.greet("Hi I am Alvin Okoro");
