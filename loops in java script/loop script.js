// // For loop
// console.log("For Loop:");
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// // While loop
// console.log("\nWhile Loop:");
// let j = 1;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }

// // Do-while loop
// console.log("\nDo-While Loop:");
// let k = 1;
// do {
//     console.log(k);
//     k++;
// } while (k <= 5);

// //problem one..using for loop.
// let marks = {
//     aslam:46,
//     sahil:37,
//     rohail:32,
//     abbid:29,
// }
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("marks of " +Object.keys(marks)[i]+ " are ="+ marks[Object.keys(marks)[i]])
// }

//problem two..using for-in loop.
let marks = {
    aslam:46,
    sahil:37,
    rohail:32, 
    abbid:29,
}
for (let i in marks){
    console.log("  marks of " + i + " are=" + marks[i])
}

//problem three..using while loop.
let password = 2468;
let i 
while (i != password){
    console.log("incorrect password! try again")
    i = console.log("enter your password")
}
console.log("correct password `wellcome` ")
