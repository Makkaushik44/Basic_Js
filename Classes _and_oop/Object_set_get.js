const User = {
    _email:"h@gmail.com",
    _password:"123m",


get email(){
    return this._email.toUpperCase()
},

set email(value){
    this._email=value
}

 
}
console.log(User.email);