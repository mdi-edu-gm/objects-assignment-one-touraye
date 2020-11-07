const students = {
    fname: "Lamin",
    lname: "Jabbi",
    department: "ITC",
    program: "Computer Science",
    class: "21",
    admittedDate: "2017",
    completedDate: "2021",
  };

// add a new property 'course'
students.course = [`Java', 'Web', 'Programming', 'Database', 'Networking','PLD`];

// delete the class
delete students.class;

// update the admitted date
students.admittedDate = '2020';

// add grades
students.grades = [
  {
      code: "WP101",
      title: "Web Programming I",
      creditHrs: 2,
      grade: "C",
  },
  {
      code: "DB101",
      title: "Database I",
      creditHrs: 2,
      grade: "A",
  }
];
console.table(students);


// greetings method
function greetings(greet){
  return `Peace, I am ${greet.fname}. How are you?`
}

console.log(greetings(students));
