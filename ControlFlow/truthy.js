

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

const userEmail=[];
if (userEmail.length===0) {
    console.log("array is empty");
}

const emptyObj={}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}

//nulis collison operator

let val1;
//val1=5 ?? 10
//val1=null ?? 10
//val1= undefined ?? 15
val1=null ?? 10 ?? 20

console.log(val1);

//Ternary Operator

//condition ? true : false

const iprice=100;
iprice <=80 ? console.log("less then 80"): console.log("more than 80");