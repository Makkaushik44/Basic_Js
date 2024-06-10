//1...
// let arr=[1];

// arr.length=4;
// arr[3]=2;

// for(let i in arr){
//     console.log(i);
// }

//output: 0 3

//2...
// const base ={x:1};
// const obj=Object.freeze(base);
// base.y=2;
// console.log(obj.y);

// OUTPUT: undefined
//---------
//3//
// console.log("5"-"2");

//output: 3
//------
//4//
// console.log("1"- -"1");
// output:2

//5//
// const str1 = 'Hi\nthere';
// const str2 =`Hi
// there`;

// str1 === str2;

//output: true

//6//
// const arr1 = ['JavaScript', 'Universe'];
// const arr2 = ['JavaScript', 'Universe'];

//  console.log(arr1 == arr2); 
// console.log(arr1 ===arr2);

//output: false , false

//7//

// function* gen1(){
//     yield [1,2,3];
// }
// function* gen2(){
//     yield* [1,2,3];
// }

// const i1 = gen1();
// const i2 = gen2();

// console.log(i1.next().value);
// console.log(i2.next().value);

// output: [1,2,3], 1

//8//
// var obj ={
//     x:2,
//     fun: function () {
//         console.log(this.x);
//     },
// };

// obj.fun();
// new obj.fun();

// output:2, undefined

//9//
// function calc(num){
//     return num*0.01;
// }
// console.log(typeof calc('hello'));

// output:Number

//10//
// var x = 0;

// if(10>9>8){
//     x+=1;
    
// }
// console.log(x);

// output:0

//11//
 
// console.log(Math.floor(4.8));
// console.log(Math.ceil(4.1));
// console.log(Math.round(4.5));
// console.log(Math.max(4,3,6,8));

// const gameName = new String("j h e   y");

// console.log(gameName.trimStart("h"));

// function addTwo(num) {
//     return num+1
// }
// addTwo(6);

// const add = function(numb){
//       return numb+1
// }
// add(5);
//===========================
function fun(){
    let num = 5;
    if (num === "5") {
        return true;
    } else {
       return false; 
    }
}
console.log(fun());