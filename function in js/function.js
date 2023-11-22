// function average(x, y){
//     console.log("next");
//     return 1 + (x + y)/2
// }

// let a = 22;
// let b = 6;
// let c = 33;

// console.log("plus one average of a and b =", 
// average (a , b))
// console.log("plus one average of b and c =", average (b , c))
// console.log("plus one average of a and c =", average (a , c))
//
//
//
// Function to calculate and return the grade based on the percentage
// function Grade(percentage) {
// if(percentage>=100){
//     return "invalid percentage sorry!";
// }
    
//     if (percentage >= 90) {
//         return 'A+';
//     } 
//     else if (percentage >= 80) {
//         return 'A';
//     } 
//     else if (percentage >= 70) {
//         return 'B';
//     } 
//     else if (percentage >= 60) {
//         return 'C';
//     }
//     else if (percentage >= 50) {
//         return 'D';
//     }
//     else if(percentage <=0){
//         return "invalid percentage sorry!"
//     }
//     else {
//         return 'F';
//     }
// }
// let studentPercentage = 74; 
// let studentGrade = Grade(studentPercentage);

// console.log(`Student Percentage: ${studentPercentage}%`);
// console.log(`Student Grade: ${studentGrade}`);

    //some types of functions..
    // Arrow function....
    const sayhello = (name, greeting) => {
        console.log(greeting + " " +  name)}
   sayhello("  shoaib", "good morning")
// example-two..
const hello = arrow => {
    console.log("wellcome" + " " + arrow);
    console.log("good morning")
} 
const n = {
    Name: "shoaib",
    role: "developer",

    show: function(){
        setTimeout(() => {
       console.log("the name is ${this.Name}\nthe role is ${this.role}")     
        }, 2000);
    }
}
hello("shoaib", "good morning")




// anonymous function....called function expression.
let show = function (){
    console.log("hello class")
}
show();
//example..timing set function.
setTimeout(function (){
    console.log("processing..");
    },3000);

 
// scopes in java script.
// (1)block-scope.{}..
let a = 5; //global variable
if (a == 5){
    let b = 10; //block variable
    const c = 15;
    console.log(a);
    console.log(b);
    console.log(c);
}


//(2)function scope..
var x = 20;
if (1 == 1){
    console.log(x);
    var y = 30;
    console.log(y);
}
console.log(y);

// callback functions..
// function add(a, b){
//     return a + b;
// }
// function power (a, b){
//     return Math.pow(a, b);
// }

// // Higher-order function that takes a callback function
// function operateOnNumbers(a, b, operationCallback) {
//     console.log(`Numbers: ${a} and ${b}`);
//     const result = operationCallback(a, b);
//     console.log(`Result: ${result}`);
//   }
  
//   // Callback functions for different operations
//   function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function divide(a, b) {
//     if (b !== 0) {
//       return a / b;
//     } else {
//       return "Cannot divide by zero!";
//     }
//   }
  
//   // Example usage of higher-order function with callbacks
//   operateOnNumbers(5, 3, add);
//   operateOnNumbers(8, 2, subtract);
//   operateOnNumbers(4, 6, multiply);
//   operateOnNumbers(10, 2, divide);
//   operateOnNumbers(7, 0, divide); // Handling divide by zero
  
//   // Callback function with setTimeout
//   function delayedGreeting(name, callback) {
//     setTimeout(() => {
//       callback(name);
//     }, 2000);
//   }
  
//example-2 higher and callback functions..
//calculate..

const add=(a, b) => {
  return a+b;
}
const sub=(a, b) => {
  return a-b;
}
const mult=(a, b) => {
  return Math.abs(a*b);
}
const div=(a, b) => {
return Math.abs(a/b);
}
const power=(a, b) => {
  return Math.pow(a, b);
}
//function used as argument in higher order function..
 const calculate = (num1, num2, operator) => {
  return operator(num1, num2);
 }
 console.log(calculate(8,6, add));
 console.log(calculate(8,6,mult));
 console.log(calculate(8,6,sub));
 console.log(calculate(8,6,power));
 console.log(calculate(8,6,div));