const coding=["js","ruby","java", "python", "cap"]

// coding.forEach(function (item){
//     console.log("I can code in "+ item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

//=======

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);



// coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
// })

const myCoding=[
    {
        language:"java",
        laguageFileName:"java"
    },
    {
        language:"javascript",
        laguageFileName:"javascript"
    },
    {
        language:"python",
        laguageFileName:"python"
    }
]

myCoding.forEach((item)=>{
    console.log(item.laguageFileName);
})