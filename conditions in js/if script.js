//    //if
//    var sunnyday = true;
//    if(sunnyday)
//    {
//        console.log(sunnyday);
//    }
//    //else
//    let marks = 50;
//    if(marks > 20)
//    {
//        console.log("congrats you are pass")
//    }
//    else{
//        console.log("sorry you are fail")
//    }
//    //else if
//    let temprature = 24;
//    if (temprature < 18)
//    {
//        console.log("today is cold day");
//    }
//    else if(temprature >=18)
//    {
//        console.log("today is warm day");
//    }
//    else{
//        console.log("today is hot day");
//    }
   //basic functions
//    let a = 18
//    if(a<0)
//    {
//     console.log("this is valid");
//    }
//    else if (a<=19) 
//    {
//     console.log("you are under nineteen")
//    } 
//    else {
//     console.log("you are youngster")
//     }

//switch statement..

   let dayName = "tuesday";

   switch (dayName) {
       case ("sunday"):
          console.log("today is sunday")
           break;
       case ("Monday"):
        console.log("today is monday")
           break;
           case ("tuesday"):
            console.log("today is tuesday")
               break;
               case ("wednesday"):
                console.log("today is wednesday");
                   break;
                   case ("thirsday"):
                    console.log("today is thirsday");
                       break;
                       case ("friday"):
                        console.log("today is friday")
                           break;
                           case ("saturday"):
                            console.log("today is saturday")
                               break;
       
       default:
           dayName = "Invalid day name";
   }

//    //conditions
//    let a = 15;
// if(a<0){
//   alert("this is an invalid age");
// }
// else if(a<9){
//   alert("you are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//   alert("you are a kid and you can think of driving after 18");
// }
// else{
//   alert("you can now drive as you are above 18");
// }
// console.log("done")
// console.log("you can", (a<18? "not drive" :"drive"));

//about days switch 
let day = "5th"
switch (day){
  case "1st":
    console.log("i like monday the most")
    break;
  case "2nd":
    console.log("i like tuesday the most")
    break;
  case "3rd":
    console.log("i like wednesday the most")
    break;
  case "4th":
    console.log("i like thursday the most")
    break;
  case "5th":
    console.log("i like friday the most")
    break;
  case "6th":
    console.log("i like saturday the most")
    break;
  case "7th":
    console.log("i like sunday the most")
    break;
  default:
    console.log("that is invalid day sorry!")
 
}
