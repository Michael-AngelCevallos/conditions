"use strict"
//** SOME LINES MAY BE COMMENTED OUT, BECAUSE IT WILL MESS UP FINAL CODE//
//Example # 1
let city = "San Antonio";
if (city == "Boston"){
    console.log("The city is Boston");
    console.log("Lets go red sox");
} else if (city === "San Antonio"){
    console.log("The city is San Antonio");
    console.log("go spurs go!");
}else{
console.log("The condition is false");
}

//Example # 2
console.log("hi");
addNumbers("5");
function addNumbers(num1) {
    let number;
    if (typeof num1 == "string") {
        number = parseInt(num1);
    } else {
        return number + 2;
    }
}


//Example # 3
//let pizzaPreference= prompt("What is your favorite kind of Pizza?");
//if(pizzaPreference.toLowerCase() == "cheese" || pizzaPreference.toLowerCase() == "pepperoni"){
   // console.log("Thanks Kevin from Home Alone!");
//}else if (pizzaPreference.toLowerCase() == "pineapples and gumballs"){
    //console.log("What a coindidence, I like pinapples and gumballs too!")
//}else{
   // console.log("Oh, okay...thats awesome");
//}

//Example # 4

let success = true;
//var message;
//if(success){
    //message = " The operation was successful";
//}
//else{
    //message = "The operation was not successful";
//}
//console.log(message);

// #4 part 2

let message = success ? ("The operation was successful") : ("The operation was not successful");
console.log(message);

//EXAMPLE #5 **SWITCHES**

let pizzaPreference= prompt("What is your favorite kind of Pizza?");
if(pizzaPreference.toLowerCase() == "cheese" || pizzaPreference.toLowerCase() == "pepperoni"){
    console.log("Thanks Kevin from Home Alone!");
}else if (pizzaPreference.toLowerCase() == "pineapples and gumballs"){
    console.log("What a coindidence, I like pinapples and gumballs too!")
}else{
    console.log("Oh, okay...thats awesome");
}
    switch(pizzaPreference){
        case "cheese":
        //do this
        //and this
        //and this
        console.log("Thanks Kevin from Home Alone!");
            break;
        case "pineapples and gumballs":
        console.log("What a coindidence, I like pinapples and gumballs too!");
            break;
        default:
            console.log("Oh, okay...thats awesome");
            break;
    }

// determine if variable is betweeen 5 and 8
// NOTE notice you must enter your number here and save/refresh on web page in order to work correctly
let number= 3;
switch(number){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("The number came before 5");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        console.log("The number came between 5 and 8");
         break;
    default:
        console.log('The number came after 8');
        break;

}

