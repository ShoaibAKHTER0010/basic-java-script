//simple arrays in java script.
//it is type of global object that is used to stored data or different data types.

let marks_class_9th = [93, 87, 81, 74, 68, "absent"]
console.log(marks_class_9th[0]);//index start from [0]..
console.log(marks_class_9th[1]);
console.log(marks_class_9th[2]);
console.log(marks_class_9th[3]);
console.log(marks_class_9th[4]);
console.log(marks_class_9th[5]);
console.log(marks_class_9th[6]);//undefined
//length..returns the number of elements.it is also a property.
console.log("the length of marks_class_9th is", marks_class_9th.length);
//adding value in undefined array.
marks_class_9th[6] = 65;
console.log(marks_class_9th)


//array methods..
//(1)tostring-method.
let num = [5, 10, 15, 20, 25]
let x = num.toString()//x is now a string.
console.log(x, typeof x)

//(2)concatinate method.
let arr1 = ['a', 'b'];
let arr2 = ['c', 'd'];
let result= arr1.concat(arr2)
console.log(result);

//(3)push method.
let fruits = ["apple", "banana"];
fruits.push('orange');
console.log(fruits);

//(4)pop method.
let childs = ["ahmad", "ayaz", "danish"];
childs.pop();
console.log(childs);

//(5)shift method.
let childrens = ["ahmad", "ayaz", "danish"];
childrens.shift();
console.log(childrens);

//(6)unshift()..add one or more elements to the begning Of array.
let children = ["ahmad", "ayaz", "danish"];
childrens.unshift('saleem');
console.log(childrens);
 

//(7)sort method..set array in alphabatical sequence.
let boys =["zubair", "rashid", "asif", "malik", "uzair", "khalid", "imran"]
boys.sort();
console.log(boys)
//accending order..
let compare = (a, b)=>{
    return a - b;
}
let no = [44, 55, 23, 12, 29, 61, 9 ]
no.sort(compare)
console.log(no)
//decendig order..
let decendig = (a, b)=>{
    return b - a;
}
let numbers = [44, 55, 23, 12, 29, 61, 9 ]
no.sort(decendig)
console.log(no)

//(8)splice..remove and add new numbers.
let array = [44, 55, 23, 12, 29, 61, 9 ]
 array.splice(2, 3, 56, 57, 58)
 let deletedvalues = array.splice(2, 3, 56, 57, 58)
 console.log(array)
 console.log(deletedvalues)

 //(8)slice..remove array/num
 let array1 = [44, 55, 23, 12, 29, 61, 9 ]
 array1.slice(2, 3)
 console.log(array1)


 //(10)indexof()

//(12)filter..
let array2 = [44, 55, 23, 12
    , {name: 'ali', age: 12}, {name:'hamza',age:15},{name:'salman',
    age:17}
    ]
    let reslt = array2.filter((item)=> item.age >=15 )
    console.log(reslt)

    //(13)find()and filter..
const fruit = [
    { id: 1, name: 'Apple', color: 'Red' },
    { id: 2, name: 'Banana', color: 'Yellow' },
    { id: 3, name: 'Orange', color: 'Orange' },
    { id: 4, name: 'Grapes', color: 'Purple' },
  ];
  
  // Example using find to get a specific item by name
  const findFruitByName = (fruitName) => {
    return fruits.find(fruit => fruit.name === fruitName);
  };
  
  console.log(findFruitByName('Banana')); // Output: { id: 2, name: 'Banana', color: 'Yellow' }
  
  // Example using filter to get all fruits of a specific color
  const filterFruitsByColor = (targetColor) => {
    return fruits.filter(fruit => fruit.color === targetColor);
  };
  
  console.log(filterFruitsByColor('Red')); // Output: [ { id: 1, name: 'Apple', color: 'Red' } ]
  
 




