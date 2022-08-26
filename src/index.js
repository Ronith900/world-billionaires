import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

//var declared to the var keyword are scoped to the functions
//var declared to the let keyword are scoped to the block in which they are defined
// const var is block scoped, this var cannot be reassigned. It will always be constant

// function hello_var() {
//   for (var i = 1; i < 5; i++) {
//     console.log("Variable " + String(i));
//   }

//   console.log(i);
// }

// function hello_let() {
//   var i = 0;
//   for (let i = 1; i < 5; i++) {
//     console.log("Let " + String(i));
//   }

//   console.log(i);
// }

// const dob = 1994;
// console.log(dob);

// hello_var();
// hello_let();

// // Objects
// const person = {
//   name: "Ronith",
//   walk() {
//     console.log(this);
//   },
//   talk() {},
// };

// console.log(person);

// person.talk();
// //If target memeber of an object is unclear we use bracket notation, if not we use person.name = '';
// const targetMember = "name";
// person[targetMember] = "Ron";

// //This keyword and bind function

// person.walk();
// //when a method is called outsid an object this keyword will refer to the windows object;
// //Every function in js is an object which can be called
// let walk_c = person.walk;
// walk_c();

// //This can be avoided by using the bind, which binds the method to that objects
// walk_c = person.walk.bind(person);
// walk_c();

// //arrow functions
// function square_old(number) {
//   return number * number;
// }
// console.log(square_old(5));

// const square_new = (number) => number * number;
// console.log(square_new(4));

// const jobs = [
//   { id: 1, is_active: true },
//   { id: 2, is_active: true },
//   { id: 3, is_active: false },
// ];

// const active_jobs = jobs.filter((job) => job.is_active);
// console.log(active_jobs);

// //Array.map Method
// const colors = ["red", "green", "blue"];
// const items = colors.map((color) => "<li>${color}</li>");
// console.log(items);

// // Object destructuring
// const { name: n } = person;
// console.log(n);

// // Spread operator

// const f_a = [1, 2, 3];
// const s_a = [4, 5, 6];
// const combines = [...f_a, "a", ...s_a];
// console.log(combines);

//classes

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("Ronith");

// Inheritance
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("Teach");
  }
}

const teacher = new Teacher("Temp", "MSC");
console.log(teacher.degree);

// //Named and Default Export
// //Default -> import ... from './'
// //Named -> import {...} from './'
