const person: {
  name: string;
  age: number;
  sex: string;
  hobbies: string[];
  roles: [number, string];
} = {
  name: "Alvin",
  age: 109,
  sex: "Male",
  hobbies: ["Football", "Eating", "Gaming"],
  roles: [2008, "Admin"],
};

console.log(person.roles)