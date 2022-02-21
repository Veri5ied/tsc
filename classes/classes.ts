class Department {
  public name: string;
  private students: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  //Method in tsc
  describe() {
    console.log("Department: " + this.name);
  }

  addStudents(student: string) {
    this.students.push(student);
  }

  printNumberofStudent() {
    console.log(this.students.length);
  }
}

const computerScience = new Department("Computer Science");
computerScience.addStudents("Alvin");
computerScience.describe();
console.log(computerScience);
