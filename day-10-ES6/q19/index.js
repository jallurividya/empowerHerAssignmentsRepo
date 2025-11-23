//1. Template Literals + Expressions
let a=5;
let b=7;
console.log(`${a} + ${b} = ${a+b}`);

const message=`
line 1.
line 2.
line 3.`
console.log(message);

let firstName = "John";
let lastName = "Doe";
console.log(`${firstName} ${lastName}`);


//2. Arrow Functions & this
const square = (n)=> n*n;
console.log(square(7));

const obj = {
  value: 50,
  test: () => console.log(this.value) // Because arrow functions don't have their own this, so this.value refers to the global scope instead of the object.
};
obj.test();

const obj1 = {
    value: 50,
    test(){
        console.log(this.value);
    }
}
obj1.test();


//3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copy = {...product};
console.log(copy);

const a1 = { x: 1 };
const b1 = { y: 2 };
merge = {...a1, ...b1};
console.log(merge);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 10, 73, 25)); 


//4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [x, y] = arr;
console.log(x, y); 

const laptop = { brand: "Dell", ram: "8GB" };
const {brand} = laptop;
console.log(brand);

const info = {};
console.log(info?.name);


//5. Scoping (let/var/const)
for (var i = 0; i < 3; i++) {}
console.log(i);   // 3

for (let j = 0; j < 3; j++) {}
//console.log(j); // ReferenceError: j is not defined

// const is used because it prevents a variable from being reassigned, ensuring the variable name 
// always refers to the same value or object. This helps avoid accidental changes in the code. 
// Although the variable cannot be reassigned, objects or arrays declared with const can still be 
// modified internally—only the reference itself is locked, not the contents.


//6. Ternary Operator – Practice
const speed = (kmph)=>{
  return kmph>60 ? "Fast" : "Normal";
}
console.log(speed(70));

const result = (age) => age>=18 ? "Adult" : "Minor"
console.log(result(23));

const ans = (num) => num>0 ? "Positive" : num<0 ? "Negative" : "Zero";
console.log(ans(116));


//7. Spread, Rest & Arrays
const nums = [1,2,3];
console.log(...nums, 4, 5);

a = ["x","y"];
b = ["z"];
console.log(...a, ...b);

const printNames = (...values) => console.log(values);
printNames("A","B","C");


//8. Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
const {id,status}=user;

const id1 = 101;
const role = "admin";
const user1 = {
  id,
  role,
  greet() {
    return "Hello User!";
  }
};
console.log(user1);
console.log(user1.greet());


//9. Template Literals (More Practice)
console.log(`Today's date : ${new Date().toDateString()}`);

let NAME = "Vidya";
let score = 90;
console.log(`Hello ${NAME}, your score is ${score}/100`);


//10. Arrow Function Shorthands
const sum = (a,b)=>a+b;
console.log(sum(3,4));

const isAdult = (age) => age>18;
console.log(isAdult(30));

const double = (num) => 2*num;
console.log(double(545));


//11. Spread Operator (Arrays & Objects)
const array = [1, 2, 3];
const clone = [...array];
console.log(clone);

const array1 = [1, 2, 3]
const result1 = [100, ...array1];
console.log(result1);

const obj3 = { name: "John", age: 25 };
const obj4 = { age: 30, city: "Delhi" };
const merged = { ...obj3, ...obj4 };
console.log(merged);


//12. Optional Chaining (More Practice)
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user3.address?.city);
console.log(user3.job?.title);
console.log(user3.address?.pincode); // pincode is not present in the address so it gives "undefined"
