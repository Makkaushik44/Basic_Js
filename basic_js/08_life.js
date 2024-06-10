// Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //name IIFE
    console.log('DB CONNECTED');
})();


((name)=>{
    //name unIIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('kaushik')


