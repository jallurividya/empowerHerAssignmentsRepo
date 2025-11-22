let username = 'Vidya';
let course = 'empowerHer';
console.log(`Hello ${username}, welcome to the ${course} course!`);

const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet(){
    console.log("Hello");
  }
};
student.greet();
console.log(student.name);
console.log(student.age);

const getFullName = (first,last)=>`${first} ${last}`
console.log(getFullName('Vidya', 'Jalluri'));
