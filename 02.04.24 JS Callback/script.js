function Human(name, surname, age, isMale = true) {
  (this.name = name),
    (this.surname = surname),
    (this.age = age),
    (this.isMail = isMale),
    (this.getFullname = function () {
      return this.surname[0].toUpperCase() + this.name.toUpperCase();
    });
}
function Student(university, faculty, major, degree, course, gpa = 0) {
  (this.university = university),
    (this.faculty = faculty),
    (this.major = major),
    (this.degree = degree),
    (this.course = course),
    (this.gpa = gpa),
    (this.generateStudentID = function () {
      this.studentId = `${this.university.slice(0, 3)}_${this.faculty
        .slice(0,2)
        .toUpperCase()}${parseInt(Math.random() * (10000 - 1000) + 1000)}`;
        return this.studentId;
    });
    this.generateStudentID()
}

let sebuhi = new Student("BDU", "Tetbiqi_Riyaziyyat", "CyberSec", "bakalavr", 3, 4.3);
Object.setPrototypeOf(sebuhi, new Human("Sebuhi", "Nurmemmedov", "19"));
let akif = new Student("BDU", "Tetbiqi", "Cyber", "baka", 6, 2.3);
Object.setPrototypeOf(sebuhi, new Human("Akif", "Memmedov", "16"));
let ronaldo = new Student("UNEC", "Riyaziyyat", "Futbolcu", "bakalavr", 4, 3.3);
Object.setPrototypeOf(sebuhi, new Human("Ronaldo", "Eliyev", "14"));

console.log(sebuhi);