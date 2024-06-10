//for of

// ["", "", ""]

const arr=[1,2,3,4,5]

for (const val of arr) {
   // console.log(val);
}

const greeting="hello word"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

//Maps
const map=new Map() //map store unique value 
map.set('IN',"India")
map.set("US","United States")
map.set('Fr',"France")
console.log(map);

for (const [key1, val] of map) {
    console.log(key1,":-",val);
    
}

const myObject={
    'game1':'NSF',
    'game2':'Spiderman'
}

// for (const [key, val] of myObject) { //loops not iterable here
//     console.log(key,":=",val);
// }


