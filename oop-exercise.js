/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  addGrade(grade) {
    if (grade < 0 || grade > 100) {
      console.log("Grade must be between 0 and 100.");
    } else {
      this.grades.push(grade);
    }
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    return this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
  }

  hasPassed(passingGrade) {
    const avgVal = this.calculateAverageGrade();
    return avgVal >= passingGrade ? true : false;
  }
}

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }

  enrollStudent(student) {
    this.students.push(student);
  }

  calculateCourseAverage() {
    if (this.students.length === 0) {
      return 0;
    }
    const totalVal = this.students.reduce(
      (acc, val) => acc + val.calculateAverageGrade(),
      0
    );
    return totalVal / this.students.length;
  }
}
