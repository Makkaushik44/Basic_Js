
//const tinderUser=new Object();  //this is singelton object

 const tinderUser={}
 tinderUser.id="mak@44";
 tinderUser.name="Sammy";
 tinderUser.isLogedIn=false;

 //console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kaushik",
            lastname:"makwana"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); 

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
   
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))