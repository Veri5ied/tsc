class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const computerScience = new Department("Computer Science");
console.log(computerScience);
