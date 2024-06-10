const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)

    
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//Second way 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//three way
const promiseThree=new Promise(function(resolve,reject ){
    setTimeout(function(){
        resolve({username:"kaushik",eamil:"makkaushik3557@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//four
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'kaushik',password:'123'})
        }else{
            console.log('ERROR: something went wrong');
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or reject"))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'kaushik',password:'123'})
        }else{
            console.log('ERROR: JS something went wrong');
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response= await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

fetch('http://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);

})
.catch((error) => console.log(error))