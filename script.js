function Man(name, surname) {
  this.name = name;
  this.surname = surname;
}

Man.prototype.run = function () {
  console.log(this.name + " біжить");
};

function Student(name, surname, school) {
  Man.apply(this, arguments);
  this.school = school;
}
Student.prototype = Object.create(Man.prototype);
Student.prototype.constructor = Student;

Student.prototype.run = function () {
  //Man.prototype.run.apply(this);
  console.log(this.name + " у школу!");
};



function Emploee(name, surname, work) {
  Man.apply(this, arguments);
  this.work = work;
}
Emploee.prototype = Object.create(Man.prototype);
Emploee.prototype.constructor = Emploee;

Emploee.prototype.run = function () {
  Man.prototype.run.apply(this);
  console.log(this.name + " на роботу!");
};



let student1 = new Student("John", "Johnson", "266");

console.log(student1.name, student1.surname, student1.school);
student1.run();

let emploee1 = new Emploee("Joan", "Joanson", "Nix");
emploee1.run();

console.log(emploee1.name, emploee1.surname, emploee1.work);
