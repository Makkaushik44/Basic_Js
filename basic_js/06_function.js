function syaMyName(){
    console.log("K");
    console.log("A");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
}

// syaMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}

const result=addTwoNumbers(3,6)

// console.log("Result:",result);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Kaushik"));

//console.log(loginUserMessage()); //this output is undefined 

//-------------------------===================
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400));

