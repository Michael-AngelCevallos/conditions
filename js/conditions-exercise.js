"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//Start # 1


/*function  analyzeColor(color) {
    let colorLower= color.toLowerCase()

    if (colorLower === "blue" ){

        return "The sky is blue";
    } else if (colorLower ==='orange') {
        return "Oranges are orange!";

    } else if (colorLower === ('green') ){
        return "The grass is green!";

    } else if (colorLower === ( 'black') ) {
        return "Space is black!";
    } else if(colorLower === ("purple")) {
        return "Onions are purple";

    } else if(colorLower === ("red" )){
        return "strawberries are red"

    } else {
        return "I dont know that color..."

    }

 }


let result= analyzeColor("green");
console.log(result)

/**
//End # 1






// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
 let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(randomColor);

//or

//let result2 = analyzeColor(randomColor);
//console.log(result2)




/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//BEGIN Exercise

// switch (randomColor){
  //  case 0:
  //      color = "blue"
   //     break;
   // case 1:
    //    color = "orange"
    //    break;
    //case 2:
    //    color = "yellow"

    //    break;
    //case 3:
    //    color = "green"

    //    break;
    //case 4:
    //    color = "red"

   //     break;
    //case 5 :
    //    color = "purple"

    //    break;
    //case 6:
    //    color = "indigo"


//}



//console.log(randomColor)


// End exercise
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//Begin
    /*
let userColor= prompt("What is your color?");
let userColorResult= analyzeColor(userColor);
console.log(userColorResult);



function  analyzeColor(color) {


    if (color === "blue") {
        return prompt("The sky is blue");

    } else if (color === 'orange') {
        return prompt("Oranges are orange!");

    } else if (color === ('green')) {
        return prompt("The grass is green!");

    } else if (color === ('black')) {
        return prompt("Space is black!");

    } else {
        return prompt("I dont know that color...");

    }


}
/*
//End
     */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//BEGIN

/*function calculateTotal(luckyNumber, total) {
    let discount ,
        discountedPrice;
    switch(luckyNumber){
        case 0:
            discount = 0;
            break;
        case 1:
            discount = 0.1;
            break;
        case 2:
            discount = .25;
            break;
        case 3:
            discount = .35;
            break;
        case 4:
            discount = 0.5;
            break;
        case 5:
            discount = 1
            break;
        default:
            return "no lucky number"
        break;

    }
    if (!isNaN(total)){
        discountedPrice= (total*(1-discount));
    }else{
        return "Total is not provided, is not a number";
    }
    return discountedPrice.toFixed();
}
let discount = calculateTotal(4,100);
console.log(discount);




 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */


// Generate a random number between 0 and 6
 /*var luckyNumber = Math.floor(Math.random() * 6);

 let userNumberPrompt= prompt("What is the total of your bill?")
 let userResult2= calculateTotal(luckyNumber, userNumberPrompt);
 alert(`Your Lucky Number is ${luckyNumber} .
     The price before the discount was $${userNumberPrompt}.
     The price after the discount is $${userResult2}!`);

//END Exercise
*/
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 */
/*BEGIN

let userConfirm= confirm("Would You like to enter a Number?");
let userNumber;

if(userConfirm){
    userNumber = prompt("What is your Number?")
    if(userNumber % 2 ===0){
        alert("Your number is Even");
    }else{
        alert("Your number is Odd");
    }
    let plus100 = parseFloat(userNumber) + 100;
    alert("Your number plus 100 is " + plus100);

    if( userNumber > 0){
        alert("Your number is Positive");
    }else{
        alert("Your number is Negative");
    }
}else{
    alert("Invalid Data Type")
}

//END
*/


//   Can you refactor your code to use functions?
// * HINT: The way we prompt for a value could be improved
// */

let userConfirm= confirm("Would You like to enter a Number?");
let userNumber;
if(userConfirm){
    userNumber = prompt("Please enter your number");
    if(!isNaN(userNumber)) {

        if (isEven(userConfirm)) {

            if (userNumber % 2 === 0) {
                alert("Your number is Even");
            } else {
                alert("Your number is Odd");
            }
            let plus100 = parseFloat(userNumber) + 100;
            alert("Your number plus 100 is " + add100(userNumber));

            if (isPositive(userNumber)) {
                alert("Your number is Positive");
            } else {
                alert("Your number is Negative");
            }
        } else {
            alert("Invalid Data Type")
        }

        function isEven(num) {
            return num % 2 === 0;
        }

        function add100(num) {
            return parseFloat(num) + 100;
        }

        function isPositive(num) {
            return num > 0;
        }
