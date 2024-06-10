//singalton
//Object.create


//object iterals

const mySym=Symbol("key1")

const Juser={
    name:"kaushik",
    age:18,
    "full name":"Kaushik Makwana", //this is not access with .operator
    //mySym:"mykey1", this is string not use with symbol operator
    [mySym]:"mykey1",
    location:"Bhvanagar",
    email:"mak@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

console.log(Juser.email);
console.log(Juser["email"]);
console.log(Juser["full name"]);
console.log(Juser[mySym]);

Juser.email="kau2@gmial.com"
//Object.freeze(Juser) //write freeze after not change any value inside object value
Juser.email="jak@gmail.com"
console.log(Juser.email);

Juser.greeting=function(){
    console.log("hello hy");
}

console.log(Juser.greeting());

